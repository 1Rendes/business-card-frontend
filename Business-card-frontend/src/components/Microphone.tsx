import { LiveKitRoom } from "@livekit/components-react";
import { getConnectionDetails } from "../utils/getLivekitToken";

const connectionDetails = getConnectionDetails();

console.log(connectionDetails);

const Microphone = () => {
  return (
    <div>
      hallo
      {/* <LiveKitRoom
        token={connectionDetails?.participantToken}
        serverUrl={connectionDetails?.serverUrl}
        connect={connectionDetails !== undefined}
        audio={true}
        video={false}
        onMediaDeviceFailure={onDeviceFailure}
        onDisconnected={() => {
          updateConnectionDetails(undefined);
        }}
      ></LiveKitRoom> */}
    </div>
  );
};

export default Microphone;
