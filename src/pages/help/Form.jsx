function Form() {
  return (
    <div>
      <h1>Send us questions</h1>
      <form className="form-container">
        <label className="form-control">
          <span>Your Email:</span>
          <input type="text" />
        </label>
        <label className="form-control">
          <span>Your Questions:</span>
          <textarea></textarea>
        </label>
        <button className="button">Send</button>
      </form>
    </div>
  );
}

export default Form;
