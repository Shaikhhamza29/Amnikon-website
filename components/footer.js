/* Footer component — injected into every page via this script */
(function () {
  const placeholder = document.getElementById('footer-placeholder');
  if (!placeholder) return;

  placeholder.outerHTML = `
<footer class="site-footer" id="site-footer">

  <!-- CTA Band -->
  <div class="footer-cta">
    <div class="container">
      <span class="eyebrow">Let's Get Started</span>
      <h2>Ready to Transform Your IT?</h2>
      <p>
        Whether you're planning a cloud migration, upgrading infrastructure, or
        strengthening your cybersecurity posture — our team is ready to help.
      </p>
      <div class="footer-cta-btns">
        <a href="../contact/contact.html" class="btn btn-primary">Contact Us</a>
        <a href="../support/support.html" class="btn btn-outline">Get Support</a>
      </div>
    </div>
  </div>

  <!-- Footer Links -->
  <div class="footer-main">
    <div class="container">
      <div class="footer-grid">

        <div class="footer-brand">
          <p>
            A people-first IT company delivering managed services, cloud solutions,
            cybersecurity, and compliance expertise for modern businesses.
          </p>
          <div class="footer-social">
            <a href="https://www.linkedin.com/company/amnikon-technologies/" aria-label="LinkedIn">in</a>

          </div>
        </div>

        <div class="footer-col">
          <h5>Company</h5>
          <ul>
            <li><a href="../about/company.html">Our Company</a></li>
            <li><a href="../about/team.html">Our Team</a></li>
            <li><a href="../careers/careers.html">Careers</a></li>
            <li><a href="../projects/projects.html">Projects</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Services</h5>
          <ul>
            <li><a href="../services/services.html">Managed IT</a></li>
            <li><a href="../services/services.html">Cloud Solutions</a></li>
            <li><a href="../services/services.html">Cybersecurity</a></li>
            <li><a href="../services/services.html">Advisory</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Contact</h5>
          <ul>
            <li><a href="../contact/contact.html">Get in Touch</a></li>
            <li><a href="../support/support.html">Support</a></li>
            <li><a href="mailto:sales@amnikon.com">sales@amnikon.com</a></li>
            <li><a href="tel:+18886758060">+1 888 675 8060</a></li>
          </ul>
        </div>

      </div>

      <div class="footer-bottom">
        <p>© 2025 AMNIKON Technologies. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>

    </div>
  </div>

</footer>
`;
})();
