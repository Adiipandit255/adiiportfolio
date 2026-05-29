const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-10"
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Contact Me
      </h2>

      <form className="max-w-3xl mx-auto flex flex-col gap-6">

        <input
          type="text"
          placeholder="Your Name"
          className="p-5 rounded-xl bg-white/10 outline-none"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="p-5 rounded-xl bg-white/10 outline-none"
        />

        <textarea
          rows="6"
          placeholder="Your Message"
          className="p-5 rounded-xl bg-white/10 outline-none"
        ></textarea>

        <button className="bg-cyan-500 py-4 rounded-xl text-xl">
          Send Message
        </button>

      </form>
    </section>
  )
}

export default Contact