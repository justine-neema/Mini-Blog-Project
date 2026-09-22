import React, { useEffect } from "react";

type ComponentType<P> = React.ComponentType<P>;

function withLogger<P extends Record<string, any>>(WrappedComponent: ComponentType<P>, name?: string) {
  const displayName = name || WrappedComponent.displayName || WrappedComponent.name || "Component";

  const Logger: React.FC<P> = (props: P) => {
    useEffect(() => {
      console.log(`[withLogger] ${displayName} mounted`);
      return () => {
        console.log(`[withLogger] ${displayName} unmounted`);
      };
    }, []);

    return <WrappedComponent {...(props as P)} />;
  };

  Logger.displayName = `withLogger(${displayName})`;

  return Logger;
}

export default withLogger;
