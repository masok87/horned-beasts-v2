function SelectedBeast({ theBeast, handleModal }) {
  function closeModal() {
    // set theBeast to be an empty object
    handleModal({});
  }

  return (
    <div className="selected-beast">
      <span onClick={closeModal}>X</span>
      <img src={theBeast.image_url} alt={theBeast.title} />
    </div>
  );
}
export default SelectedBeast;
