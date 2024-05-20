import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store"
import Skeleton from './Skeleton'
import ExpandablePanel from './ExpandablePanel'
import Button from './Button'

function AlbumsList({ user }) {
    const { data, error, isLoading } = useFetchAlbumsQuery(user)
    const [addAlbum, results] = useAddAlbumMutation()

    const handleAddAlbum = () => {
        addAlbum(user)
    }

    let content
    if (isLoading) {
        <Skeleton times={3} />
    } else if (error) {
        content = <div>Error loading albums</div>
    } else {
        content = data.map(ablum => {
            const header = <div>{ablum.title}</div>

            return <ExpandablePanel key={ablum.id} header={header}>
                List of photos
            </ExpandablePanel>
        })
    }

    return <div>
        <div>
            Albums for {user.name}
            <Button onClick={handleAddAlbum}>
                + Add Album
            </Button>
        </div>
        <div>
            {content}
        </div>
    </div>
}

export default AlbumsList