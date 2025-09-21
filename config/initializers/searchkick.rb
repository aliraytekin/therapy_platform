Searchkick.client =
  Elasticsearch::Client.new(
    url: ENV.fetch("BONSAI_URL"),
    transport_options: { request: { timeout: 5 } }
  )
