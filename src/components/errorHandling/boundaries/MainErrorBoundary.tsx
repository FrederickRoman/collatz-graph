import { Component, ReactNode } from "react";
import MainErrorFallback from "../fallbacks/MainErrorFallback";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class MainErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  //   console.error("Uncaught error:", error, errorInfo);
  // }

  public render() {
    return this.state.hasError ? <MainErrorFallback /> : this.props.children;
  }
}

export default MainErrorBoundary;
