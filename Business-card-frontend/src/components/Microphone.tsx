import {
  AgentState,
  BarVisualizer,
  DisconnectButton,
  LiveKitRoom,
  RoomAudioRenderer,
  useVoiceAssistant,
} from "@livekit/components-react";
import {
  ConnectionDetails,
  getConnectionDetails,
} from "../utils/getLivekitToken";
import { MediaDeviceFailure } from "livekit-client";
import { useCallback, useEffect, useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { IconContext } from "react-icons";
import css from "./Microphone.module.css";

const Microphone = ({ isFlipped }: { isFlipped: boolean }) => {
  const [agentState, setAgentState] = useState<AgentState>("disconnected");
  console.log("agentState: ", agentState);

  const [connectionDetails, setConnectionDetails] = useState<
    ConnectionDetails | undefined
  >(undefined);

  const onConnectButtonClicked = useCallback(async () => {
    const newDetails = await getConnectionDetails();
    setConnectionDetails(newDetails);
  }, []);

  return (
    <div
      className={`${css.microphone} ${isFlipped ? css.microphoneFlipped : ""}`}
    >
      <LiveKitRoom
        token={connectionDetails?.participantToken}
        serverUrl={connectionDetails?.serverUrl}
        connect={connectionDetails !== undefined}
        audio={true}
        video={false}
        onMediaDeviceFailure={onDeviceFailure}
        onDisconnected={() => {
          setConnectionDetails(undefined);
        }}
      >
        <SimpleVoiceAssistant onStateChange={setAgentState} />
        <IconContext.Provider value={{ className: "microphone-icon-default" }}>
          {agentState === "disconnected" && (
            <button
              className={css.microButton}
              onClick={onConnectButtonClicked}
            >
              <FaMicrophone />
            </button>
          )}
          {agentState === "initializing" ||
            (agentState === "connecting" && (
              <DisconnectButton className={css.microButton}>
                <div className={css.loader} />
              </DisconnectButton>
            ))}
          {agentState === "listening" && (
            <DisconnectButton className={css.microButton}>
              <FaMicrophone className={css.microOn} />
            </DisconnectButton>
          )}
          {agentState === "speaking" && (
            <DisconnectButton className={css.microButton}>
              <FaMicrophone className={css.microOn} />
            </DisconnectButton>
          )}
          {agentState === "thinking" && (
            <DisconnectButton className={css.microButton}>
              <FaMicrophone className={css.microOn} />
            </DisconnectButton>
          )}
        </IconContext.Provider>
        <RoomAudioRenderer />
      </LiveKitRoom>
    </div>
  );
};

export default Microphone;

function onDeviceFailure(error?: MediaDeviceFailure) {
  console.error(error);
  alert(
    "Error acquiring camera or microphone permissions. Please make sure you grant the necessary permissions in your browser and reload the tab"
  );
}

function SimpleVoiceAssistant(props: {
  onStateChange: (state: AgentState) => void;
}) {
  const { state, audioTrack } = useVoiceAssistant();
  useEffect(() => {
    props.onStateChange(state);
  }, [props, state]);
  return (
    <div>
      <BarVisualizer
        state={state}
        barCount={5}
        trackRef={audioTrack}
        className="agent-visualizer"
        options={{ minHeight: 24 }}
      />
    </div>
  );
}
