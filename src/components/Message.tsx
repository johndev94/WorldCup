
interface Props {
    name: String;
    time: String;
    message: String;
}

function Message(props: Props) {

    return (
        <div>
            <hr />
            <b>{props.name}</b> {props.time}
            <p>{props.message}</p>
        </div>
    );

}
export default Message;