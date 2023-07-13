import React, { useState } from "react";

function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    setEmail("");

    setSubscribed(true);
  };

  return (
    <div>
      <h5>Subscribe to newsletter</h5>
      {!subscribed ? (
        <form onSubmit={handleSubscribe} class="form ">
          <input
            type="email"
            placeholder="juan@gmail.com"
            value={email}
            onChange={handleEmailChange}
          />
          <button type="submit" class="subscribe footer-right mt-2 me-5">
            Subscribe
          </button>
        </form>
      ) : (
        <p>Thank you for subscribing!</p>
      )}
    </div>
  );
}

export default NewsletterSubscription;
