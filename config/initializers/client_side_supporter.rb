webpack_manifest_json_path = Rails.root.join('client', 'tmp', 'webpack-manifest.json')

if File.exist?(webpack_manifest_json_path)
  Rails.application.config.x.client_side_supporter.webpack_manifest =
    JSON.parse(File.read(webpack_manifest_json_path))
end

if Rails.application.config.x.client_side_supporter.update_webpack_manifest_on_reloading == true
  reloader = Rails.application.config.file_watcher.new([webpack_manifest_json_path]) do
    if File.exist?(webpack_manifest_json_path)
      Rails.application.config.x.client_side_supporter.webpack_manifest =
        JSON.parse(File.read(webpack_manifest_json_path))
    end
  end

  Rails.application.reloaders << reloader

  ActiveSupport::Reloader.to_prepare do
    reloader.execute_if_updated
  end
end
