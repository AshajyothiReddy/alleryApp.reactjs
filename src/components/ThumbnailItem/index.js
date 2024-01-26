// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onClickThumbnail} = props
  const {
    imageUrl,
    thumbnailUrl,
    imageAltText,
    thumbnailAltText,
  } = thumbnailDetails

  const onClickImage = id => {
    onClickThumbnail(id)
  }

  return (
    <li className="thumbnail-item">
      <button type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-image"
          onClick={onClickImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
