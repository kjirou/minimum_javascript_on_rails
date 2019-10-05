module ApplicationHelper
  def client_side_javascript_tag
    path = ClientSideSupporter.webpacked_javascript_path
    javascript_include_tag(path).html_safe
  end
end
