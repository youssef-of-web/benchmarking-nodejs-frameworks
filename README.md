# Test Benchmarking Express vs Fastify vs Hono

### Intall autocannon

npm i -g autocannon

### Send POST request:

autocannon -c 100 -d 10 -m POST -H "Content-Type: application/json" -b '{"key": "value"}' URL

### Send GET request:

autocannon -l -c 100 -d 10 URL
