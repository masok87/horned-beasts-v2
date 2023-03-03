function SelectedBeast({ theBeast, handleModal }) {
  function closeModal() {
    // set theBeast to be an empty object
    handleModal({});
    console.log("here");
  }

  return (
    <div className="selected-beast">
      <span onClick={closeModal}>X</span>
      <img src={theBeast.image_url} alt={theBeast.title} />
      <p>{theBeast.description}</p>
    </div>
  );
}
export default SelectedBeast;
