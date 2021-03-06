(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['layout'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!DOCTYPE html>\r\n<html>\r\n	<head>\r\n		<meta charset=\"utf-8\">\r\n		<link rel=\"stylesheet\" href=\"/style.css\" media=\"screen\">\r\n		<script src=\"index.js\" charset=\"utf-8\" defer></script>\r\n	</head>\r\n\r\n	<body>\r\n		<header>\r\n			<ul class=\"headbar\">\r\n				<li class=\"headbutton\">\r\n					<button type=\"button\" id=\"headhome\">Home</button>\r\n				</li>\r\n				<li class=\"headbutton\">\r\n					<button type=\"button\" id=\"headstart\">Play game</button>\r\n				</li>\r\n				<li class=\"headbutton\">\r\n					<button type=\"button\" id=\"headrules\">Rules</button>\r\n				</li>\r\n			</ul>\r\n		</header>\r\n		"
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n	</body>\r\n</html>";
},"useData":true});
})();