
const BookDetailsCartt = ({cmnt}) => {
    const {comment,email}=cmnt
    console.log()
    return (
        <div className="my-6">
            <p className="text-xl"> comment:<span className="text-blue-500 ml-6 ">{comment}</span> <span></span></p>
            <small>{email}</small>
        </div>
    );
};

export default BookDetailsCartt;