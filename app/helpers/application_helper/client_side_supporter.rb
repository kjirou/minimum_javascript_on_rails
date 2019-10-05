module ApplicationHelper
  # A module for cooperation with the client side
  module ClientSideSupporter
    class << self
      # Returns a value that is used for the "src" attribute on script tag.
      def webpacked_javascript_path
        "#{base_publication_path}/#{webpack_manifest['webpacked']['js']}"
      end

      private

      def base_publication_path
        # If you have specified an external host in `config.action_controller.asset_host`,
        #   you need to consider it here.
        '/client'
      end

      def webpack_manifest
        Rails.application.config.x.client_side_supporter.webpack_manifest
      end
    end
  end
end
