import { useEffect, useRef } from 'react';
import { ChatBubble_iris } from "./ChatBubble_iris";
import { ChatBubble_user } from "./ChatBubble_user";
import propTypes from "prop-types";
import { ChatBubble_Loading } from './ChatBubbleLoading';

export const ChatContainer = ({ msg_list, loading }) => {
    const containerRef = useRef(null); // Create a ref for the container

    const ContainerStyle = {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        fontSize: "17px",
        color: "black",
        padding: "0",
        overflowY: 'scroll',
        overflowX: 'hidden',
        scrollBehavior: 'smooth',
    };

    // Scroll to the bottom whenever msg_list changes
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [msg_list]); // This will run when msg_list is updated

    return (
        <div ref={containerRef} style={ContainerStyle}>
            {msg_list.map((msg, index) =>
                msg.user === "Iris" ? (
                    <ChatBubble_iris key={index} message={msg.message} />
                ) : (
                    <div key={index} style={{width:'100%', display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{width:'40%'}}></div>
                        <ChatBubble_user message={msg.message} />
                    </div>
                )
            )}
            {loading && <ChatBubble_Loading />} {/* Display loader while loading */}
        </div>
    );
};

ChatContainer.propTypes = {
    loading: propTypes.bool.isRequired,
    msg_list: propTypes.array.isRequired,
};
