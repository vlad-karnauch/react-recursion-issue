import { useState, useEffect } from "react";
import "./styles.css";

export default function App({ title }: { title?: string }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading || !title) {
    return <div data-id="bad-468#513">Loading...</div>;
  }

  return (
    <div data-id="good-585#632">
      Loaded
      <App />
    </div>
  );
}
