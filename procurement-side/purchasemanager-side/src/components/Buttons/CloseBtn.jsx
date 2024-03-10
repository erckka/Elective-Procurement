export default function CloseBtn({ closeModal, type }) {
  const handleDiscardChanges = () => {
    if (type === 'discard') {
      closeModal()
    } else if (type === 'cancel') {
      closeModal()
    } else if (type === 'goBack') {
      closeModal()
    }
  }

  return (
    <div className="justify-center w-1/2">
      <button
        type="button"
        onClick={handleDiscardChanges}
        className="bg-red-500 hover:bg-red-700 w-[100%] text-white font-bold py-2 px-4 text-sm rounded focus:outline-none focus:shadow-outline"
      >
        {type === 'discard'
          ? 'Discard'
          : type === 'cancel'
          ? 'Cancel'
          : 'Go Back'}
      </button>
    </div>
  )
}
