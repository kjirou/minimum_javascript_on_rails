webpack_manifest_json_path = Rails.root.join('client', 'tmp', 'webpack-manifest.json')

unless File.exist?(webpack_manifest_json_path)
  raise 'Please execute `npm run build` command before operating the Rails.'
end
Rails.application.config.x.client_side_supporter.webpack_manifest =
  JSON.parse(File.read(webpack_manifest_json_path))
