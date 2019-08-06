<template>
  <section class="resume-section" id="contact">
    <h2>Contact</h2>
    <p class="lead">
      Get in touch!
      <br />You can reach us directly on the form below, or do the
      <a
        href="https://facebook.com/jazzbeams"
        target="_blank"
        class="link-text"
      >Facebook</a> thing if you prefer.
    </p>

    <form
      name="contact"
      method="post"
      v-on:submit.prevent="handleSubmit"
      action="/success/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out:
          <input name="bot-field" />
        </label>
      </p>

      <div class="sender-info">
        <div>
          <label for="name" class="label">Your name</label>
          <input type="text" name="name" v-model="formData.name" />
        </div>
        <div>
          <label for="email">Your email</label>
          <input type="email" name="email" v-model="formData.email" />
        </div>
      </div>

      <div class="message-wrapper">
        <label for="message">Message</label>
        <textarea name="message" v-model="formData.message"></textarea>
      </div>

      <button type="submit">Send</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formData: {}
    };
  },

  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => this.$router.push("/success"))
        .catch(error => alert(error));
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  width: 40rem;
  max-width: 100%;
  label,
  input,
  textarea {
    display: block;
    width: 95%;
  }
  .hidden {
    display: none;
  }
  textarea {
    height: 10rem;
  }
  button[type="submit"] {
    background-color: $primary;
    color: $white;
    border: 0;
    font-size: 1em;
    margin-top: 1em;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    &:hover,
    &:focus {
      background-color: $link;
      color: $black;
    }
  }
}
</style>