(function() {
    var implementors = Object.fromEntries([["rust_oauth2_server",[["impl&lt;S, B&gt; Transform&lt;S, ServiceRequest&gt; for <a class=\"struct\" href=\"rust_oauth2_server/middleware/auth_middleware/struct.AuthMiddleware.html\" title=\"struct rust_oauth2_server::middleware::auth_middleware::AuthMiddleware\">AuthMiddleware</a><div class=\"where\">where\n    S: Service&lt;ServiceRequest, Response = ServiceResponse&lt;B&gt;, Error = Error&gt; + 'static,\n    S::Future: 'static,\n    B: 'static,</div>"],["impl&lt;S, B&gt; Transform&lt;S, ServiceRequest&gt; for <a class=\"struct\" href=\"rust_oauth2_server/middleware/metrics_middleware/struct.MetricsMiddleware.html\" title=\"struct rust_oauth2_server::middleware::metrics_middleware::MetricsMiddleware\">MetricsMiddleware</a><div class=\"where\">where\n    S: Service&lt;ServiceRequest, Response = ServiceResponse&lt;B&gt;, Error = Error&gt; + 'static,\n    S::Future: 'static,\n    B: 'static,</div>"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[913]}