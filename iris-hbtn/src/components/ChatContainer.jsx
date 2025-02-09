import { ChatBubble_iris } from "./ChatBubble_iris";
import { ChatBubble_user } from "./ChatBubble_user";
import propTypes from "prop-types";

export const ChatContainer = ({ msg_list }) => {
    const ContainerStyle = {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        fontSize: "13px",
        color: "black",
        padding: "10px",
    };

    return (
        <div style={ContainerStyle}>
            <ol>
                {msg_list.map((msg, index) =>
                    msg.user === "Iris" ? (
                        <ChatBubble_iris key={index} message={msg.message} />
                    ) : (
                        <ChatBubble_user key={index} message={msg.message} />
                    )
                )}
            </ol>
        </div>
    );
};

ChatContainer.propTypes = {
    msg_list: propTypes.array.isRequired,
};
