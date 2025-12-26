(function() {
    var implementors = Object.fromEntries([["rust_oauth2_server",[["impl&lt;S, B&gt; Service&lt;ServiceRequest&gt; for <a class=\"struct\" href=\"rust_oauth2_server/middleware/auth_middleware/struct.AuthMiddlewareService.html\" title=\"struct rust_oauth2_server::middleware::auth_middleware::AuthMiddlewareService\">AuthMiddlewareService</a>&lt;S&gt;<div class=\"where\">where\n    S: Service&lt;ServiceRequest, Response = ServiceResponse&lt;B&gt;, Error = Error&gt; + 'static,\n    S::Future: 'static,\n    B: 'static,</div>"],["impl&lt;S, B&gt; Service&lt;ServiceRequest&gt; for <a class=\"struct\" href=\"rust_oauth2_server/middleware/metrics_middleware/struct.MetricsMiddlewareService.html\" title=\"struct rust_oauth2_server::middleware::metrics_middleware::MetricsMiddlewareService\">MetricsMiddlewareService</a>&lt;S&gt;<div class=\"where\">where\n    S: Service&lt;ServiceRequest, Response = ServiceResponse&lt;B&gt;, Error = Error&gt; + 'static,\n    S::Future: 'static,\n    B: 'static,</div>"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[963]}