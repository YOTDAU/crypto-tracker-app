Set up with npm start and i when expo is asking for a device input.

Uses AWS lamda function via serverless to recieve the API due to CORs blocking if the API key being in the codebase.

CoinMarketCap sandbox API will return data based on snapshot update from 30/08/2019 - 18:51:02.

Alterntively I could've used the CoinGecko API, which is free and doesn't require any headers. However, once the project got going I enjoyed the challenge of setting up the headers correctly and experimenting with AWS Lamda as part of the learning process while getting more experience with real-world API deployment. A good thing about the sandbox api was that it recreated all aspects of _pro_ version and not just the format and type of data that was returned. 
