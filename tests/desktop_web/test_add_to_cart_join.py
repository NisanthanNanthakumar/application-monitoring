import time
import yaml
import random
import sentry_sdk
from urllib.parse import urlencode

def test_add_to_cart_join(desktop_web_driver):
    sentry_sdk.set_tag("pytestName", "test_add_to_cart_join")

    with open('endpoints.yaml', 'r') as stream:
        data_loaded = yaml.safe_load(stream)
        endpoints = data_loaded['react_endpoints']

    for endpoint in endpoints:
        endpoint_products_join = endpoint + "/products-join"
        sentry_sdk.set_tag("endpoint", endpoint_products_join)

        for i in range(random.randrange(20)):
            # Ensures a different backend endpoint gets picked each time
            url = ""
            # TODO make a query_string builder function for sharing this across tests
            query_string = { 
                'se': 'tda',
                'backend': random.sample(['flask','express','springboot'], 1)[0]
            }
            url = endpoint_products_join + '?' + urlencode(query_string)

            desktop_web_driver.get(url)
            time.sleep(random.randrange(3) + 3)
