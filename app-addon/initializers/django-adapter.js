export default {
  name: "django-adapter",
  initialize: function(container, app) {
    var djangoAdapterConfig = {
      apiHost: app.get('API_HOST') || 'http://localhost:8000',
      apiNamespace: app.get('API_NAMESPACE') || ''
    };
    app.register('config:djangoAdapterConfig', djangoAdapterConfig, { instantiate: false });
    app.inject('adapter', 'djangoAdapterConfig', 'config:djangoAdapterConfig');
  }
};
