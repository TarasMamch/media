import { useFetchAlbumsQuery } from "../store"

function AlbumsList({ user }) {
    const { date, error, isLoading } = useFetchAlbumsQuery(user)

    return <div>
        Albums for {user.name}
    </div>
}

export default AlbumsList