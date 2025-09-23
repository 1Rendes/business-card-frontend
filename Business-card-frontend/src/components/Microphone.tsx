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
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const Microphone = ({ isChatChoosen }: { isChatChoosen: boolean }) => {
  const { i18n } = useTranslation();
  const [agentState, setAgentState] = useState<AgentState>("disconnected");
  const [isMicroClicked, setIsMicroClicked] = useState<boolean>(false);

  const [connectionDetails, setConnectionDetails] = useState<
    ConnectionDetails | undefined
  >(undefined);
  const onConnectButtonClicked = useCallback(async () => {
    if (isMicroClicked) {
      setIsMicroClicked(false);
      setConnectionDetails(undefined);
      return;
    }
    setIsMicroClicked(true);
    const newDetails = await getConnectionDetails(i18n.language);
    setConnectionDetails(newDetails);
  }, [isMicroClicked]);

  useEffect(() => {
    if (isChatChoosen) {
      setConnectionDetails(undefined);
      setIsMicroClicked(false);
    }
    return () => {
      setConnectionDetails(undefined);
      setIsMicroClicked(false);
    };
  }, [isChatChoosen]);

  return (
    <div className={css.microphoneContainer} onClick={onConnectButtonClicked}>
      <div className={css.microphone}>
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
          <IconContext.Provider
            value={{ className: "microphone-icon-default" }}
          >
            {agentState === "disconnected" && (
              <button className={css.microButton}>
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
      <div
        className={clsx(
          css.microphoneSwitchButton,
          isMicroClicked ? css.microphoneSwitchButtonOn : ""
        )}
      >
        <div
          className={clsx(
            css.microphoneSwitchRound,
            isMicroClicked ? css.microphoneSwitchRoundOn : ""
          )}
        ></div>
      </div>
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
