import { useSpring, animated } from 'react-spring';

export const TestComponent = () => {
  const styles = useSpring({
    transform: 'translateY(0)',
    opacity: 1,
    from: { transform: 'translateY(-100%)', opacity: 0 },
    config: { tension: 200, friction: 20 },
    background: 'black',
  });

  return (
    <animated.div style={styles} className="chat-window">
      <h1>Welcome to the Chat Window</h1>
      <p>This chat window slides in from the top.</p>
    </animated.div>
  );
};
