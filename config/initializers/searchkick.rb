Searchkick.client =
  if Rails.env.production?
    Elasticsearch::Client.new(
      url: ENV.fetch("BONSAI"),
      transport_options: { request: { timeout: 5 } }
    )
  else
    Elasticsearch::Client.new(
      url: "https://localhost:9200",
      user: "elastic",
      password: "X4aSPvfXdmMYsZs-3L+h",
      transport_options: {
        request: { timeout: 5 },
        ssl: {
          ca_file: Rails.root.join("config", "certs", "http_ca.crt").to_s
        }
      }
    )
  end
