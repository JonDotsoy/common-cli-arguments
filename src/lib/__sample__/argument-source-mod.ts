import { modPodman } from "./modPodman.namespace";
import { modPodmanMachine } from "./modPodmanMachine.namespace";
import { modPodmanMachineInfo } from "./modPodmanMachineInfo.namespace";
import { modPodmanMachineOs } from "./modPodmanMachineOs.namespace";
import { modPodmanMachineOsApply } from "./modPodmanMachineOsApply.namespace";
import { modPodmanMachineStop } from "./modPodmanMachineStop.namespace";
import { modPodmanMachineSsh } from "./modPodmanMachineSsh.namespace";
import { modPodmanMachineReset } from "./modPodmanMachineReset.namespace";
import { modPodmanMachineInit } from "./modPodmanMachineInit.namespace";
import { modPodmanMachineSet } from "./modPodmanMachineSet.namespace";
import { modPodmanMachineList } from "./modPodmanMachineList.namespace";
import { modPodmanMachineStart } from "./modPodmanMachineStart.namespace";
import { modPodmanMachineRm } from "./modPodmanMachineRm.namespace";
import { modPodmanMachineInspect } from "./modPodmanMachineInspect.namespace";
import { modPodmanCompose } from "./modPodmanCompose.namespace";
import { modPodmanComposeWait } from "./modPodmanComposeWait.namespace";
import { modPodmanComposeConfig } from "./modPodmanComposeConfig.namespace";
import { modPodmanComposeDown } from "./modPodmanComposeDown.namespace";
import { modPodmanComposeUp } from "./modPodmanComposeUp.namespace";
import { modPodmanComposeTop } from "./modPodmanComposeTop.namespace";
import { modPodmanComposeWatch } from "./modPodmanComposeWatch.namespace";
import { modPodmanComposeCreate } from "./modPodmanComposeCreate.namespace";
import { modPodmanComposeStats } from "./modPodmanComposeStats.namespace";
import { modPodmanComposeImages } from "./modPodmanComposeImages.namespace";
import { modPodmanComposeExec } from "./modPodmanComposeExec.namespace";
import { modPodmanComposePull } from "./modPodmanComposePull.namespace";
import { modPodmanComposePause } from "./modPodmanComposePause.namespace";
import { modPodmanComposeScale } from "./modPodmanComposeScale.namespace";
import { modPodmanComposeRestart } from "./modPodmanComposeRestart.namespace";
import { modPodmanComposeStart } from "./modPodmanComposeStart.namespace";
import { modPodmanComposePs } from "./modPodmanComposePs.namespace";
import { modPodmanComposeRun } from "./modPodmanComposeRun.namespace";
import { modPodmanComposePush } from "./modPodmanComposePush.namespace";
import { modPodmanComposeUnpause } from "./modPodmanComposeUnpause.namespace";
import { modPodmanComposeBuild } from "./modPodmanComposeBuild.namespace";
import { modPodmanComposeStop } from "./modPodmanComposeStop.namespace";
import { modPodmanComposeLogs } from "./modPodmanComposeLogs.namespace";
import { modPodmanComposeEvents } from "./modPodmanComposeEvents.namespace";
import { modPodmanComposeCp } from "./modPodmanComposeCp.namespace";
import { modPodmanComposePort } from "./modPodmanComposePort.namespace";
import { modPodmanComposeLs } from "./modPodmanComposeLs.namespace";
import { modPodmanComposeVersion } from "./modPodmanComposeVersion.namespace";
import { modPodmanComposeRm } from "./modPodmanComposeRm.namespace";
import { modPodmanComposeKill } from "./modPodmanComposeKill.namespace";
import { modPodmanComposeAttach } from "./modPodmanComposeAttach.namespace";
import { modPodmanSystem } from "./modPodmanSystem.namespace";
import { modPodmanSystemConnection } from "./modPodmanSystemConnection.namespace";
import { modPodmanSystemConnectionAdd } from "./modPodmanSystemConnectionAdd.namespace";
import { modPodmanSystemConnectionList } from "./modPodmanSystemConnectionList.namespace";
import { modPodmanSystemConnectionRemove } from "./modPodmanSystemConnectionRemove.namespace";
import { modPodmanSystemConnectionRename } from "./modPodmanSystemConnectionRename.namespace";
import { modPodmanSystemConnectionDefault } from "./modPodmanSystemConnectionDefault.namespace";
import { modPodmanSystemInfo } from "./modPodmanSystemInfo.namespace";
import { modPodmanSystemEvents } from "./modPodmanSystemEvents.namespace";
import { modPodmanSystemDf } from "./modPodmanSystemDf.namespace";
import { modPodmanSystemPrune } from "./modPodmanSystemPrune.namespace";
import { modPodmanSystemCheck } from "./modPodmanSystemCheck.namespace";
import { modPodmanImage } from "./modPodmanImage.namespace";
import { modPodmanImageScp } from "./modPodmanImageScp.namespace";
import { modPodmanImagePush } from "./modPodmanImagePush.namespace";
import { modPodmanImageDiff } from "./modPodmanImageDiff.namespace";
import { modPodmanImageImport } from "./modPodmanImageImport.namespace";
import { modPodmanImageTree } from "./modPodmanImageTree.namespace";
import { modPodmanImageTag } from "./modPodmanImageTag.namespace";
import { modPodmanImageSearch } from "./modPodmanImageSearch.namespace";
import { modPodmanImageSave } from "./modPodmanImageSave.namespace";
import { modPodmanImageBuild } from "./modPodmanImageBuild.namespace";
import { modPodmanImageRm } from "./modPodmanImageRm.namespace";
import { modPodmanImageHistory } from "./modPodmanImageHistory.namespace";
import { modPodmanImageList } from "./modPodmanImageList.namespace";
import { modPodmanImageInspect } from "./modPodmanImageInspect.namespace";
import { modPodmanImagePull } from "./modPodmanImagePull.namespace";
import { modPodmanImagePrune } from "./modPodmanImagePrune.namespace";
import { modPodmanImageExists } from "./modPodmanImageExists.namespace";
import { modPodmanImageUntag } from "./modPodmanImageUntag.namespace";
import { modPodmanImageLoad } from "./modPodmanImageLoad.namespace";
import { modPodmanHealthcheck } from "./modPodmanHealthcheck.namespace";
import { modPodmanHealthcheckRun } from "./modPodmanHealthcheckRun.namespace";
import { modPodmanFarm } from "./modPodmanFarm.namespace";
import { modPodmanFarmRemove } from "./modPodmanFarmRemove.namespace";
import { modPodmanFarmUpdate } from "./modPodmanFarmUpdate.namespace";
import { modPodmanFarmCreate } from "./modPodmanFarmCreate.namespace";
import { modPodmanFarmList } from "./modPodmanFarmList.namespace";
import { modPodmanFarmBuild } from "./modPodmanFarmBuild.namespace";
import { modPodmanManifest } from "./modPodmanManifest.namespace";
import { modPodmanManifestInspect } from "./modPodmanManifestInspect.namespace";
import { modPodmanManifestAnnotate } from "./modPodmanManifestAnnotate.namespace";
import { modPodmanManifestCreate } from "./modPodmanManifestCreate.namespace";
import { modPodmanManifestRemove } from "./modPodmanManifestRemove.namespace";
import { modPodmanManifestAdd } from "./modPodmanManifestAdd.namespace";
import { modPodmanManifestRm } from "./modPodmanManifestRm.namespace";
import { modPodmanManifestPush } from "./modPodmanManifestPush.namespace";
import { modPodmanManifestExists } from "./modPodmanManifestExists.namespace";
import { modPodmanKube } from "./modPodmanKube.namespace";
import { modPodmanKubeGenerate } from "./modPodmanKubeGenerate.namespace";
import { modPodmanKubeDown } from "./modPodmanKubeDown.namespace";
import { modPodmanKubeApply } from "./modPodmanKubeApply.namespace";
import { modPodmanKubePlay } from "./modPodmanKubePlay.namespace";
import { modPodmanLogin } from "./modPodmanLogin.namespace";
import { modPodmanImport } from "./modPodmanImport.namespace";
import { modPodmanGenerate } from "./modPodmanGenerate.namespace";
import { modPodmanGenerateSystemd } from "./modPodmanGenerateSystemd.namespace";
import { modPodmanGenerateSpec } from "./modPodmanGenerateSpec.namespace";
import { modPodmanGenerateKube } from "./modPodmanGenerateKube.namespace";
import { modPodmanContainer } from "./modPodmanContainer.namespace";
import { modPodmanContainerUnpause } from "./modPodmanContainerUnpause.namespace";
import { modPodmanContainerStop } from "./modPodmanContainerStop.namespace";
import { modPodmanContainerTop } from "./modPodmanContainerTop.namespace";
import { modPodmanContainerInspect } from "./modPodmanContainerInspect.namespace";
import { modPodmanContainerUpdate } from "./modPodmanContainerUpdate.namespace";
import { modPodmanContainerCheckpoint } from "./modPodmanContainerCheckpoint.namespace";
import { modPodmanContainerClone } from "./modPodmanContainerClone.namespace";
import { modPodmanContainerCp } from "./modPodmanContainerCp.namespace";
import { modPodmanContainerCreate } from "./modPodmanContainerCreate.namespace";
import { modPodmanContainerPort } from "./modPodmanContainerPort.namespace";
import { modPodmanContainerDiff } from "./modPodmanContainerDiff.namespace";
import { modPodmanContainerLogs } from "./modPodmanContainerLogs.namespace";
import { modPodmanContainerRename } from "./modPodmanContainerRename.namespace";
import { modPodmanContainerPrune } from "./modPodmanContainerPrune.namespace";
import { modPodmanContainerRun } from "./modPodmanContainerRun.namespace";
import { modPodmanContainerRm } from "./modPodmanContainerRm.namespace";
import { modPodmanContainerInit } from "./modPodmanContainerInit.namespace";
import { modPodmanContainerKill } from "./modPodmanContainerKill.namespace";
import { modPodmanContainerPause } from "./modPodmanContainerPause.namespace";
import { modPodmanContainerWait } from "./modPodmanContainerWait.namespace";
import { modPodmanContainerExport } from "./modPodmanContainerExport.namespace";
import { modPodmanContainerList } from "./modPodmanContainerList.namespace";
import { modPodmanContainerCommit } from "./modPodmanContainerCommit.namespace";
import { modPodmanContainerAttach } from "./modPodmanContainerAttach.namespace";
import { modPodmanContainerExec } from "./modPodmanContainerExec.namespace";
import { modPodmanContainerStats } from "./modPodmanContainerStats.namespace";
import { modPodmanContainerPs } from "./modPodmanContainerPs.namespace";
import { modPodmanContainerRestart } from "./modPodmanContainerRestart.namespace";
import { modPodmanContainerRestore } from "./modPodmanContainerRestore.namespace";
import { modPodmanContainerExists } from "./modPodmanContainerExists.namespace";
import { modPodmanContainerStart } from "./modPodmanContainerStart.namespace";
import { modPodmanNetwork } from "./modPodmanNetwork.namespace";
import { modPodmanNetworkRm } from "./modPodmanNetworkRm.namespace";
import { modPodmanNetworkLs } from "./modPodmanNetworkLs.namespace";
import { modPodmanNetworkPrune } from "./modPodmanNetworkPrune.namespace";
import { modPodmanNetworkCreate } from "./modPodmanNetworkCreate.namespace";
import { modPodmanNetworkUpdate } from "./modPodmanNetworkUpdate.namespace";
import { modPodmanNetworkInspect } from "./modPodmanNetworkInspect.namespace";
import { modPodmanNetworkExists } from "./modPodmanNetworkExists.namespace";
import { modPodmanNetworkConnect } from "./modPodmanNetworkConnect.namespace";
import { modPodmanNetworkDisconnect } from "./modPodmanNetworkDisconnect.namespace";
import { modPodmanPause } from "./modPodmanPause.namespace";
import { modPodmanRm } from "./modPodmanRm.namespace";
import { modPodmanUnpause } from "./modPodmanUnpause.namespace";
import { modPodmanLoad } from "./modPodmanLoad.namespace";
import { modPodmanHistory } from "./modPodmanHistory.namespace";
import { modPodmanPod } from "./modPodmanPod.namespace";
import { modPodmanPodKill } from "./modPodmanPodKill.namespace";
import { modPodmanPodStart } from "./modPodmanPodStart.namespace";
import { modPodmanPodPs } from "./modPodmanPodPs.namespace";
import { modPodmanPodLogs } from "./modPodmanPodLogs.namespace";
import { modPodmanPodStop } from "./modPodmanPodStop.namespace";
import { modPodmanPodPause } from "./modPodmanPodPause.namespace";
import { modPodmanPodCreate } from "./modPodmanPodCreate.namespace";
import { modPodmanPodStats } from "./modPodmanPodStats.namespace";
import { modPodmanPodRestart } from "./modPodmanPodRestart.namespace";
import { modPodmanPodPrune } from "./modPodmanPodPrune.namespace";
import { modPodmanPodUnpause } from "./modPodmanPodUnpause.namespace";
import { modPodmanPodRm } from "./modPodmanPodRm.namespace";
import { modPodmanPodTop } from "./modPodmanPodTop.namespace";
import { modPodmanPodInspect } from "./modPodmanPodInspect.namespace";
import { modPodmanPodExists } from "./modPodmanPodExists.namespace";
import { modPodmanPodClone } from "./modPodmanPodClone.namespace";
import { modPodmanSearch } from "./modPodmanSearch.namespace";
import { modPodmanVolume } from "./modPodmanVolume.namespace";
import { modPodmanVolumePrune } from "./modPodmanVolumePrune.namespace";
import { modPodmanVolumeExists } from "./modPodmanVolumeExists.namespace";
import { modPodmanVolumeReload } from "./modPodmanVolumeReload.namespace";
import { modPodmanVolumeInspect } from "./modPodmanVolumeInspect.namespace";
import { modPodmanVolumeCreate } from "./modPodmanVolumeCreate.namespace";
import { modPodmanVolumeRm } from "./modPodmanVolumeRm.namespace";
import { modPodmanVolumeLs } from "./modPodmanVolumeLs.namespace";
import { modPodmanRename } from "./modPodmanRename.namespace";
import { modPodmanInspect } from "./modPodmanInspect.namespace";
import { modPodmanStats } from "./modPodmanStats.namespace";
import { modPodmanSecret } from "./modPodmanSecret.namespace";
import { modPodmanSecretLs } from "./modPodmanSecretLs.namespace";
import { modPodmanSecretRm } from "./modPodmanSecretRm.namespace";
import { modPodmanSecretInspect } from "./modPodmanSecretInspect.namespace";
import { modPodmanSecretCreate } from "./modPodmanSecretCreate.namespace";
import { modPodmanSecretExists } from "./modPodmanSecretExists.namespace";
import { modPodmanCreate } from "./modPodmanCreate.namespace";
import { modPodmanImages } from "./modPodmanImages.namespace";
import { modPodmanCp } from "./modPodmanCp.namespace";
import { modPodmanUpdate } from "./modPodmanUpdate.namespace";
import { modPodmanPull } from "./modPodmanPull.namespace";
import { modPodmanExec } from "./modPodmanExec.namespace";
import { modPodmanVersion } from "./modPodmanVersion.namespace";
import { modPodmanStart } from "./modPodmanStart.namespace";
import { modPodmanWait } from "./modPodmanWait.namespace";
import { modPodmanSave } from "./modPodmanSave.namespace";
import { modPodmanKill } from "./modPodmanKill.namespace";
import { modPodmanInit } from "./modPodmanInit.namespace";
import { modPodmanBuild } from "./modPodmanBuild.namespace";
import { modPodmanRun } from "./modPodmanRun.namespace";
import { modPodmanLogs } from "./modPodmanLogs.namespace";
import { modPodmanPs } from "./modPodmanPs.namespace";
import { modPodmanTag } from "./modPodmanTag.namespace";
import { modPodmanDiff } from "./modPodmanDiff.namespace";
import { modPodmanPort } from "./modPodmanPort.namespace";
import { modPodmanHelp } from "./modPodmanHelp.namespace";
import { modPodmanExport } from "./modPodmanExport.namespace";
import { modPodmanLogout } from "./modPodmanLogout.namespace";
import { modPodmanCommit } from "./modPodmanCommit.namespace";
import { modPodmanUntag } from "./modPodmanUntag.namespace";
import { modPodmanStop } from "./modPodmanStop.namespace";
import { modPodmanAttach } from "./modPodmanAttach.namespace";
import { modPodmanRmi } from "./modPodmanRmi.namespace";
import { modPodmanPush } from "./modPodmanPush.namespace";
import { modPodmanRestart } from "./modPodmanRestart.namespace";
import { modPodmanTop } from "./modPodmanTop.namespace";
import { modPodmanEvents } from "./modPodmanEvents.namespace";
import { modPodmanInfo } from "./modPodmanInfo.namespace";

export const podman = async (optionsArgument: modPodman.optionsArgument) => {
  const args = modPodman.parseOptionsArgument(optionsArgument);
  return Bun.$`podman ${args}`;
};
export const podmanMachine = async (
  optionsArgument: modPodmanMachine.optionsArgument,
) => {
  const args = modPodmanMachine.parseOptionsArgument(optionsArgument);
  return Bun.$`podman machine ${args}`;
};
export const podmanMachineInfo = async (
  optionsArgument: modPodmanMachineInfo.optionsArgument,
) => {
  const args = modPodmanMachineInfo.parseOptionsArgument(optionsArgument);
  return Bun.$`machine info ${args}`;
};
export const podmanMachineOs = async (
  optionsArgument: modPodmanMachineOs.optionsArgument,
) => {
  const args = modPodmanMachineOs.parseOptionsArgument(optionsArgument);
  return Bun.$`machine os ${args}`;
};
export const podmanMachineOsApply = async (
  optionsArgument: modPodmanMachineOsApply.optionsArgument,
) => {
  const args = modPodmanMachineOsApply.parseOptionsArgument(optionsArgument);
  return Bun.$`os apply ${args}`;
};
export const podmanMachineStop = async (
  optionsArgument: modPodmanMachineStop.optionsArgument,
) => {
  const args = modPodmanMachineStop.parseOptionsArgument(optionsArgument);
  return Bun.$`machine stop ${args}`;
};
export const podmanMachineSsh = async (
  optionsArgument: modPodmanMachineSsh.optionsArgument,
) => {
  const args = modPodmanMachineSsh.parseOptionsArgument(optionsArgument);
  return Bun.$`machine ssh ${args}`;
};
export const podmanMachineReset = async (
  optionsArgument: modPodmanMachineReset.optionsArgument,
) => {
  const args = modPodmanMachineReset.parseOptionsArgument(optionsArgument);
  return Bun.$`machine reset ${args}`;
};
export const podmanMachineInit = async (
  optionsArgument: modPodmanMachineInit.optionsArgument,
) => {
  const args = modPodmanMachineInit.parseOptionsArgument(optionsArgument);
  return Bun.$`machine init ${args}`;
};
export const podmanMachineSet = async (
  optionsArgument: modPodmanMachineSet.optionsArgument,
) => {
  const args = modPodmanMachineSet.parseOptionsArgument(optionsArgument);
  return Bun.$`machine set ${args}`;
};
export const podmanMachineList = async (
  optionsArgument: modPodmanMachineList.optionsArgument,
) => {
  const args = modPodmanMachineList.parseOptionsArgument(optionsArgument);
  return Bun.$`machine list ${args}`;
};
export const podmanMachineStart = async (
  optionsArgument: modPodmanMachineStart.optionsArgument,
) => {
  const args = modPodmanMachineStart.parseOptionsArgument(optionsArgument);
  return Bun.$`machine start ${args}`;
};
export const podmanMachineRm = async (
  optionsArgument: modPodmanMachineRm.optionsArgument,
) => {
  const args = modPodmanMachineRm.parseOptionsArgument(optionsArgument);
  return Bun.$`machine rm ${args}`;
};
export const podmanMachineInspect = async (
  optionsArgument: modPodmanMachineInspect.optionsArgument,
) => {
  const args = modPodmanMachineInspect.parseOptionsArgument(optionsArgument);
  return Bun.$`machine inspect ${args}`;
};
export const podmanCompose = async (
  optionsArgument: modPodmanCompose.optionsArgument,
) => {
  const args = modPodmanCompose.parseOptionsArgument(optionsArgument);
  return Bun.$`podman compose ${args}`;
};
export const podmanComposeWait = async (
  optionsArgument: modPodmanComposeWait.optionsArgument,
) => {
  const args = modPodmanComposeWait.parseOptionsArgument(optionsArgument);
  return Bun.$`compose wait ${args}`;
};
export const podmanComposeConfig = async (
  optionsArgument: modPodmanComposeConfig.optionsArgument,
) => {
  const args = modPodmanComposeConfig.parseOptionsArgument(optionsArgument);
  return Bun.$`compose config ${args}`;
};
export const podmanComposeDown = async (
  optionsArgument: modPodmanComposeDown.optionsArgument,
) => {
  const args = modPodmanComposeDown.parseOptionsArgument(optionsArgument);
  return Bun.$`compose down ${args}`;
};
export const podmanComposeUp = async (
  optionsArgument: modPodmanComposeUp.optionsArgument,
) => {
  const args = modPodmanComposeUp.parseOptionsArgument(optionsArgument);
  return Bun.$`compose up ${args}`;
};
export const podmanComposeTop = async (
  optionsArgument: modPodmanComposeTop.optionsArgument,
) => {
  const args = modPodmanComposeTop.parseOptionsArgument(optionsArgument);
  return Bun.$`compose top ${args}`;
};
export const podmanComposeWatch = async (
  optionsArgument: modPodmanComposeWatch.optionsArgument,
) => {
  const args = modPodmanComposeWatch.parseOptionsArgument(optionsArgument);
  return Bun.$`compose watch ${args}`;
};
export const podmanComposeCreate = async (
  optionsArgument: modPodmanComposeCreate.optionsArgument,
) => {
  const args = modPodmanComposeCreate.parseOptionsArgument(optionsArgument);
  return Bun.$`compose create ${args}`;
};
export const podmanComposeStats = async (
  optionsArgument: modPodmanComposeStats.optionsArgument,
) => {
  const args = modPodmanComposeStats.parseOptionsArgument(optionsArgument);
  return Bun.$`compose stats ${args}`;
};
export const podmanComposeImages = async (
  optionsArgument: modPodmanComposeImages.optionsArgument,
) => {
  const args = modPodmanComposeImages.parseOptionsArgument(optionsArgument);
  return Bun.$`compose images ${args}`;
};
export const podmanComposeExec = async (
  optionsArgument: modPodmanComposeExec.optionsArgument,
) => {
  const args = modPodmanComposeExec.parseOptionsArgument(optionsArgument);
  return Bun.$`compose exec ${args}`;
};
export const podmanComposePull = async (
  optionsArgument: modPodmanComposePull.optionsArgument,
) => {
  const args = modPodmanComposePull.parseOptionsArgument(optionsArgument);
  return Bun.$`compose pull ${args}`;
};
export const podmanComposePause = async (
  optionsArgument: modPodmanComposePause.optionsArgument,
) => {
  const args = modPodmanComposePause.parseOptionsArgument(optionsArgument);
  return Bun.$`compose pause ${args}`;
};
export const podmanComposeScale = async (
  optionsArgument: modPodmanComposeScale.optionsArgument,
) => {
  const args = modPodmanComposeScale.parseOptionsArgument(optionsArgument);
  return Bun.$`compose scale ${args}`;
};
export const podmanComposeRestart = async (
  optionsArgument: modPodmanComposeRestart.optionsArgument,
) => {
  const args = modPodmanComposeRestart.parseOptionsArgument(optionsArgument);
  return Bun.$`compose restart ${args}`;
};
export const podmanComposeStart = async (
  optionsArgument: modPodmanComposeStart.optionsArgument,
) => {
  const args = modPodmanComposeStart.parseOptionsArgument(optionsArgument);
  return Bun.$`compose start ${args}`;
};
export const podmanComposePs = async (
  optionsArgument: modPodmanComposePs.optionsArgument,
) => {
  const args = modPodmanComposePs.parseOptionsArgument(optionsArgument);
  return Bun.$`compose ps ${args}`;
};
export const podmanComposeRun = async (
  optionsArgument: modPodmanComposeRun.optionsArgument,
) => {
  const args = modPodmanComposeRun.parseOptionsArgument(optionsArgument);
  return Bun.$`compose run ${args}`;
};
export const podmanComposePush = async (
  optionsArgument: modPodmanComposePush.optionsArgument,
) => {
  const args = modPodmanComposePush.parseOptionsArgument(optionsArgument);
  return Bun.$`compose push ${args}`;
};
export const podmanComposeUnpause = async (
  optionsArgument: modPodmanComposeUnpause.optionsArgument,
) => {
  const args = modPodmanComposeUnpause.parseOptionsArgument(optionsArgument);
  return Bun.$`compose unpause ${args}`;
};
export const podmanComposeBuild = async (
  optionsArgument: modPodmanComposeBuild.optionsArgument,
) => {
  const args = modPodmanComposeBuild.parseOptionsArgument(optionsArgument);
  return Bun.$`compose build ${args}`;
};
export const podmanComposeStop = async (
  optionsArgument: modPodmanComposeStop.optionsArgument,
) => {
  const args = modPodmanComposeStop.parseOptionsArgument(optionsArgument);
  return Bun.$`compose stop ${args}`;
};
export const podmanComposeLogs = async (
  optionsArgument: modPodmanComposeLogs.optionsArgument,
) => {
  const args = modPodmanComposeLogs.parseOptionsArgument(optionsArgument);
  return Bun.$`compose logs ${args}`;
};
export const podmanComposeEvents = async (
  optionsArgument: modPodmanComposeEvents.optionsArgument,
) => {
  const args = modPodmanComposeEvents.parseOptionsArgument(optionsArgument);
  return Bun.$`compose events ${args}`;
};
export const podmanComposeCp = async (
  optionsArgument: modPodmanComposeCp.optionsArgument,
) => {
  const args = modPodmanComposeCp.parseOptionsArgument(optionsArgument);
  return Bun.$`compose cp ${args}`;
};
export const podmanComposePort = async (
  optionsArgument: modPodmanComposePort.optionsArgument,
) => {
  const args = modPodmanComposePort.parseOptionsArgument(optionsArgument);
  return Bun.$`compose port ${args}`;
};
export const podmanComposeLs = async (
  optionsArgument: modPodmanComposeLs.optionsArgument,
) => {
  const args = modPodmanComposeLs.parseOptionsArgument(optionsArgument);
  return Bun.$`compose ls ${args}`;
};
export const podmanComposeVersion = async (
  optionsArgument: modPodmanComposeVersion.optionsArgument,
) => {
  const args = modPodmanComposeVersion.parseOptionsArgument(optionsArgument);
  return Bun.$`compose version ${args}`;
};
export const podmanComposeRm = async (
  optionsArgument: modPodmanComposeRm.optionsArgument,
) => {
  const args = modPodmanComposeRm.parseOptionsArgument(optionsArgument);
  return Bun.$`compose rm ${args}`;
};
export const podmanComposeKill = async (
  optionsArgument: modPodmanComposeKill.optionsArgument,
) => {
  const args = modPodmanComposeKill.parseOptionsArgument(optionsArgument);
  return Bun.$`compose kill ${args}`;
};
export const podmanComposeAttach = async (
  optionsArgument: modPodmanComposeAttach.optionsArgument,
) => {
  const args = modPodmanComposeAttach.parseOptionsArgument(optionsArgument);
  return Bun.$`compose attach ${args}`;
};
export const podmanSystem = async (
  optionsArgument: modPodmanSystem.optionsArgument,
) => {
  const args = modPodmanSystem.parseOptionsArgument(optionsArgument);
  return Bun.$`podman system ${args}`;
};
export const podmanSystemConnection = async (
  optionsArgument: modPodmanSystemConnection.optionsArgument,
) => {
  const args = modPodmanSystemConnection.parseOptionsArgument(optionsArgument);
  return Bun.$`system connection ${args}`;
};
export const podmanSystemConnectionAdd = async (
  optionsArgument: modPodmanSystemConnectionAdd.optionsArgument,
) => {
  const args =
    modPodmanSystemConnectionAdd.parseOptionsArgument(optionsArgument);
  return Bun.$`connection add ${args}`;
};
export const podmanSystemConnectionList = async (
  optionsArgument: modPodmanSystemConnectionList.optionsArgument,
) => {
  const args =
    modPodmanSystemConnectionList.parseOptionsArgument(optionsArgument);
  return Bun.$`connection list ${args}`;
};
export const podmanSystemConnectionRemove = async (
  optionsArgument: modPodmanSystemConnectionRemove.optionsArgument,
) => {
  const args =
    modPodmanSystemConnectionRemove.parseOptionsArgument(optionsArgument);
  return Bun.$`connection remove ${args}`;
};
export const podmanSystemConnectionRename = async (
  optionsArgument: modPodmanSystemConnectionRename.optionsArgument,
) => {
  const args =
    modPodmanSystemConnectionRename.parseOptionsArgument(optionsArgument);
  return Bun.$`connection rename ${args}`;
};
export const podmanSystemConnectionDefault = async (
  optionsArgument: modPodmanSystemConnectionDefault.optionsArgument,
) => {
  const args =
    modPodmanSystemConnectionDefault.parseOptionsArgument(optionsArgument);
  return Bun.$`connection default ${args}`;
};
export const podmanSystemInfo = async (
  optionsArgument: modPodmanSystemInfo.optionsArgument,
) => {
  const args = modPodmanSystemInfo.parseOptionsArgument(optionsArgument);
  return Bun.$`system info ${args}`;
};
export const podmanSystemEvents = async (
  optionsArgument: modPodmanSystemEvents.optionsArgument,
) => {
  const args = modPodmanSystemEvents.parseOptionsArgument(optionsArgument);
  return Bun.$`system events ${args}`;
};
export const podmanSystemDf = async (
  optionsArgument: modPodmanSystemDf.optionsArgument,
) => {
  const args = modPodmanSystemDf.parseOptionsArgument(optionsArgument);
  return Bun.$`system df ${args}`;
};
export const podmanSystemPrune = async (
  optionsArgument: modPodmanSystemPrune.optionsArgument,
) => {
  const args = modPodmanSystemPrune.parseOptionsArgument(optionsArgument);
  return Bun.$`system prune ${args}`;
};
export const podmanSystemCheck = async (
  optionsArgument: modPodmanSystemCheck.optionsArgument,
) => {
  const args = modPodmanSystemCheck.parseOptionsArgument(optionsArgument);
  return Bun.$`system check ${args}`;
};
export const podmanImage = async (
  optionsArgument: modPodmanImage.optionsArgument,
) => {
  const args = modPodmanImage.parseOptionsArgument(optionsArgument);
  return Bun.$`podman image ${args}`;
};
export const podmanImageScp = async (
  optionsArgument: modPodmanImageScp.optionsArgument,
) => {
  const args = modPodmanImageScp.parseOptionsArgument(optionsArgument);
  return Bun.$`image scp ${args}`;
};
export const podmanImagePush = async (
  optionsArgument: modPodmanImagePush.optionsArgument,
) => {
  const args = modPodmanImagePush.parseOptionsArgument(optionsArgument);
  return Bun.$`image push ${args}`;
};
export const podmanImageDiff = async (
  optionsArgument: modPodmanImageDiff.optionsArgument,
) => {
  const args = modPodmanImageDiff.parseOptionsArgument(optionsArgument);
  return Bun.$`image diff ${args}`;
};
export const podmanImageImport = async (
  optionsArgument: modPodmanImageImport.optionsArgument,
) => {
  const args = modPodmanImageImport.parseOptionsArgument(optionsArgument);
  return Bun.$`image import ${args}`;
};
export const podmanImageTree = async (
  optionsArgument: modPodmanImageTree.optionsArgument,
) => {
  const args = modPodmanImageTree.parseOptionsArgument(optionsArgument);
  return Bun.$`image tree ${args}`;
};
export const podmanImageTag = async (
  optionsArgument: modPodmanImageTag.optionsArgument,
) => {
  const args = modPodmanImageTag.parseOptionsArgument(optionsArgument);
  return Bun.$`image tag ${args}`;
};
export const podmanImageSearch = async (
  optionsArgument: modPodmanImageSearch.optionsArgument,
) => {
  const args = modPodmanImageSearch.parseOptionsArgument(optionsArgument);
  return Bun.$`image search ${args}`;
};
export const podmanImageSave = async (
  optionsArgument: modPodmanImageSave.optionsArgument,
) => {
  const args = modPodmanImageSave.parseOptionsArgument(optionsArgument);
  return Bun.$`image save ${args}`;
};
export const podmanImageBuild = async (
  optionsArgument: modPodmanImageBuild.optionsArgument,
) => {
  const args = modPodmanImageBuild.parseOptionsArgument(optionsArgument);
  return Bun.$`image build ${args}`;
};
export const podmanImageRm = async (
  optionsArgument: modPodmanImageRm.optionsArgument,
) => {
  const args = modPodmanImageRm.parseOptionsArgument(optionsArgument);
  return Bun.$`image rm ${args}`;
};
export const podmanImageHistory = async (
  optionsArgument: modPodmanImageHistory.optionsArgument,
) => {
  const args = modPodmanImageHistory.parseOptionsArgument(optionsArgument);
  return Bun.$`image history ${args}`;
};
export const podmanImageList = async (
  optionsArgument: modPodmanImageList.optionsArgument,
) => {
  const args = modPodmanImageList.parseOptionsArgument(optionsArgument);
  return Bun.$`image list ${args}`;
};
export const podmanImageInspect = async (
  optionsArgument: modPodmanImageInspect.optionsArgument,
) => {
  const args = modPodmanImageInspect.parseOptionsArgument(optionsArgument);
  return Bun.$`image inspect ${args}`;
};
export const podmanImagePull = async (
  optionsArgument: modPodmanImagePull.optionsArgument,
) => {
  const args = modPodmanImagePull.parseOptionsArgument(optionsArgument);
  return Bun.$`image pull ${args}`;
};
export const podmanImagePrune = async (
  optionsArgument: modPodmanImagePrune.optionsArgument,
) => {
  const args = modPodmanImagePrune.parseOptionsArgument(optionsArgument);
  return Bun.$`image prune ${args}`;
};
export const podmanImageExists = async (
  optionsArgument: modPodmanImageExists.optionsArgument,
) => {
  const args = modPodmanImageExists.parseOptionsArgument(optionsArgument);
  return Bun.$`image exists ${args}`;
};
export const podmanImageUntag = async (
  optionsArgument: modPodmanImageUntag.optionsArgument,
) => {
  const args = modPodmanImageUntag.parseOptionsArgument(optionsArgument);
  return Bun.$`image untag ${args}`;
};
export const podmanImageLoad = async (
  optionsArgument: modPodmanImageLoad.optionsArgument,
) => {
  const args = modPodmanImageLoad.parseOptionsArgument(optionsArgument);
  return Bun.$`image load ${args}`;
};
export const podmanHealthcheck = async (
  optionsArgument: modPodmanHealthcheck.optionsArgument,
) => {
  const args = modPodmanHealthcheck.parseOptionsArgument(optionsArgument);
  return Bun.$`podman healthcheck ${args}`;
};
export const podmanHealthcheckRun = async (
  optionsArgument: modPodmanHealthcheckRun.optionsArgument,
) => {
  const args = modPodmanHealthcheckRun.parseOptionsArgument(optionsArgument);
  return Bun.$`healthcheck run ${args}`;
};
export const podmanFarm = async (
  optionsArgument: modPodmanFarm.optionsArgument,
) => {
  const args = modPodmanFarm.parseOptionsArgument(optionsArgument);
  return Bun.$`podman farm ${args}`;
};
export const podmanFarmRemove = async (
  optionsArgument: modPodmanFarmRemove.optionsArgument,
) => {
  const args = modPodmanFarmRemove.parseOptionsArgument(optionsArgument);
  return Bun.$`farm remove ${args}`;
};
export const podmanFarmUpdate = async (
  optionsArgument: modPodmanFarmUpdate.optionsArgument,
) => {
  const args = modPodmanFarmUpdate.parseOptionsArgument(optionsArgument);
  return Bun.$`farm update ${args}`;
};
export const podmanFarmCreate = async (
  optionsArgument: modPodmanFarmCreate.optionsArgument,
) => {
  const args = modPodmanFarmCreate.parseOptionsArgument(optionsArgument);
  return Bun.$`farm create ${args}`;
};
export const podmanFarmList = async (
  optionsArgument: modPodmanFarmList.optionsArgument,
) => {
  const args = modPodmanFarmList.parseOptionsArgument(optionsArgument);
  return Bun.$`farm list ${args}`;
};
export const podmanFarmBuild = async (
  optionsArgument: modPodmanFarmBuild.optionsArgument,
) => {
  const args = modPodmanFarmBuild.parseOptionsArgument(optionsArgument);
  return Bun.$`farm build ${args}`;
};
export const podmanManifest = async (
  optionsArgument: modPodmanManifest.optionsArgument,
) => {
  const args = modPodmanManifest.parseOptionsArgument(optionsArgument);
  return Bun.$`podman manifest ${args}`;
};
export const podmanManifestInspect = async (
  optionsArgument: modPodmanManifestInspect.optionsArgument,
) => {
  const args = modPodmanManifestInspect.parseOptionsArgument(optionsArgument);
  return Bun.$`manifest inspect ${args}`;
};
export const podmanManifestAnnotate = async (
  optionsArgument: modPodmanManifestAnnotate.optionsArgument,
) => {
  const args = modPodmanManifestAnnotate.parseOptionsArgument(optionsArgument);
  return Bun.$`manifest annotate ${args}`;
};
export const podmanManifestCreate = async (
  optionsArgument: modPodmanManifestCreate.optionsArgument,
) => {
  const args = modPodmanManifestCreate.parseOptionsArgument(optionsArgument);
  return Bun.$`manifest create ${args}`;
};
export const podmanManifestRemove = async (
  optionsArgument: modPodmanManifestRemove.optionsArgument,
) => {
  const args = modPodmanManifestRemove.parseOptionsArgument(optionsArgument);
  return Bun.$`manifest remove ${args}`;
};
export const podmanManifestAdd = async (
  optionsArgument: modPodmanManifestAdd.optionsArgument,
) => {
  const args = modPodmanManifestAdd.parseOptionsArgument(optionsArgument);
  return Bun.$`manifest add ${args}`;
};
export const podmanManifestRm = async (
  optionsArgument: modPodmanManifestRm.optionsArgument,
) => {
  const args = modPodmanManifestRm.parseOptionsArgument(optionsArgument);
  return Bun.$`manifest rm ${args}`;
};
export const podmanManifestPush = async (
  optionsArgument: modPodmanManifestPush.optionsArgument,
) => {
  const args = modPodmanManifestPush.parseOptionsArgument(optionsArgument);
  return Bun.$`manifest push ${args}`;
};
export const podmanManifestExists = async (
  optionsArgument: modPodmanManifestExists.optionsArgument,
) => {
  const args = modPodmanManifestExists.parseOptionsArgument(optionsArgument);
  return Bun.$`manifest exists ${args}`;
};
export const podmanKube = async (
  optionsArgument: modPodmanKube.optionsArgument,
) => {
  const args = modPodmanKube.parseOptionsArgument(optionsArgument);
  return Bun.$`podman kube ${args}`;
};
export const podmanKubeGenerate = async (
  optionsArgument: modPodmanKubeGenerate.optionsArgument,
) => {
  const args = modPodmanKubeGenerate.parseOptionsArgument(optionsArgument);
  return Bun.$`kube generate ${args}`;
};
export const podmanKubeDown = async (
  optionsArgument: modPodmanKubeDown.optionsArgument,
) => {
  const args = modPodmanKubeDown.parseOptionsArgument(optionsArgument);
  return Bun.$`kube down ${args}`;
};
export const podmanKubeApply = async (
  optionsArgument: modPodmanKubeApply.optionsArgument,
) => {
  const args = modPodmanKubeApply.parseOptionsArgument(optionsArgument);
  return Bun.$`kube apply ${args}`;
};
export const podmanKubePlay = async (
  optionsArgument: modPodmanKubePlay.optionsArgument,
) => {
  const args = modPodmanKubePlay.parseOptionsArgument(optionsArgument);
  return Bun.$`kube play ${args}`;
};
export const podmanLogin = async (
  optionsArgument: modPodmanLogin.optionsArgument,
) => {
  const args = modPodmanLogin.parseOptionsArgument(optionsArgument);
  return Bun.$`podman login ${args}`;
};
export const podmanImport = async (
  optionsArgument: modPodmanImport.optionsArgument,
) => {
  const args = modPodmanImport.parseOptionsArgument(optionsArgument);
  return Bun.$`podman import ${args}`;
};
export const podmanGenerate = async (
  optionsArgument: modPodmanGenerate.optionsArgument,
) => {
  const args = modPodmanGenerate.parseOptionsArgument(optionsArgument);
  return Bun.$`podman generate ${args}`;
};
export const podmanGenerateSystemd = async (
  optionsArgument: modPodmanGenerateSystemd.optionsArgument,
) => {
  const args = modPodmanGenerateSystemd.parseOptionsArgument(optionsArgument);
  return Bun.$`generate systemd ${args}`;
};
export const podmanGenerateSpec = async (
  optionsArgument: modPodmanGenerateSpec.optionsArgument,
) => {
  const args = modPodmanGenerateSpec.parseOptionsArgument(optionsArgument);
  return Bun.$`generate spec ${args}`;
};
export const podmanGenerateKube = async (
  optionsArgument: modPodmanGenerateKube.optionsArgument,
) => {
  const args = modPodmanGenerateKube.parseOptionsArgument(optionsArgument);
  return Bun.$`generate kube ${args}`;
};
export const podmanContainer = async (
  optionsArgument: modPodmanContainer.optionsArgument,
) => {
  const args = modPodmanContainer.parseOptionsArgument(optionsArgument);
  return Bun.$`podman container ${args}`;
};
export const podmanContainerUnpause = async (
  optionsArgument: modPodmanContainerUnpause.optionsArgument,
) => {
  const args = modPodmanContainerUnpause.parseOptionsArgument(optionsArgument);
  return Bun.$`container unpause ${args}`;
};
export const podmanContainerStop = async (
  optionsArgument: modPodmanContainerStop.optionsArgument,
) => {
  const args = modPodmanContainerStop.parseOptionsArgument(optionsArgument);
  return Bun.$`container stop ${args}`;
};
export const podmanContainerTop = async (
  optionsArgument: modPodmanContainerTop.optionsArgument,
) => {
  const args = modPodmanContainerTop.parseOptionsArgument(optionsArgument);
  return Bun.$`container top ${args}`;
};
export const podmanContainerInspect = async (
  optionsArgument: modPodmanContainerInspect.optionsArgument,
) => {
  const args = modPodmanContainerInspect.parseOptionsArgument(optionsArgument);
  return Bun.$`container inspect ${args}`;
};
export const podmanContainerUpdate = async (
  optionsArgument: modPodmanContainerUpdate.optionsArgument,
) => {
  const args = modPodmanContainerUpdate.parseOptionsArgument(optionsArgument);
  return Bun.$`container update ${args}`;
};
export const podmanContainerCheckpoint = async (
  optionsArgument: modPodmanContainerCheckpoint.optionsArgument,
) => {
  const args =
    modPodmanContainerCheckpoint.parseOptionsArgument(optionsArgument);
  return Bun.$`container checkpoint ${args}`;
};
export const podmanContainerClone = async (
  optionsArgument: modPodmanContainerClone.optionsArgument,
) => {
  const args = modPodmanContainerClone.parseOptionsArgument(optionsArgument);
  return Bun.$`container clone ${args}`;
};
export const podmanContainerCp = async (
  optionsArgument: modPodmanContainerCp.optionsArgument,
) => {
  const args = modPodmanContainerCp.parseOptionsArgument(optionsArgument);
  return Bun.$`container cp ${args}`;
};
export const podmanContainerCreate = async (
  optionsArgument: modPodmanContainerCreate.optionsArgument,
) => {
  const args = modPodmanContainerCreate.parseOptionsArgument(optionsArgument);
  return Bun.$`container create ${args}`;
};
export const podmanContainerPort = async (
  optionsArgument: modPodmanContainerPort.optionsArgument,
) => {
  const args = modPodmanContainerPort.parseOptionsArgument(optionsArgument);
  return Bun.$`container port ${args}`;
};
export const podmanContainerDiff = async (
  optionsArgument: modPodmanContainerDiff.optionsArgument,
) => {
  const args = modPodmanContainerDiff.parseOptionsArgument(optionsArgument);
  return Bun.$`container diff ${args}`;
};
export const podmanContainerLogs = async (
  optionsArgument: modPodmanContainerLogs.optionsArgument,
) => {
  const args = modPodmanContainerLogs.parseOptionsArgument(optionsArgument);
  return Bun.$`container logs ${args}`;
};
export const podmanContainerRename = async (
  optionsArgument: modPodmanContainerRename.optionsArgument,
) => {
  const args = modPodmanContainerRename.parseOptionsArgument(optionsArgument);
  return Bun.$`container rename ${args}`;
};
export const podmanContainerPrune = async (
  optionsArgument: modPodmanContainerPrune.optionsArgument,
) => {
  const args = modPodmanContainerPrune.parseOptionsArgument(optionsArgument);
  return Bun.$`container prune ${args}`;
};
export const podmanContainerRun = async (
  optionsArgument: modPodmanContainerRun.optionsArgument,
) => {
  const args = modPodmanContainerRun.parseOptionsArgument(optionsArgument);
  return Bun.$`container run ${args}`;
};
export const podmanContainerRm = async (
  optionsArgument: modPodmanContainerRm.optionsArgument,
) => {
  const args = modPodmanContainerRm.parseOptionsArgument(optionsArgument);
  return Bun.$`container rm ${args}`;
};
export const podmanContainerInit = async (
  optionsArgument: modPodmanContainerInit.optionsArgument,
) => {
  const args = modPodmanContainerInit.parseOptionsArgument(optionsArgument);
  return Bun.$`container init ${args}`;
};
export const podmanContainerKill = async (
  optionsArgument: modPodmanContainerKill.optionsArgument,
) => {
  const args = modPodmanContainerKill.parseOptionsArgument(optionsArgument);
  return Bun.$`container kill ${args}`;
};
export const podmanContainerPause = async (
  optionsArgument: modPodmanContainerPause.optionsArgument,
) => {
  const args = modPodmanContainerPause.parseOptionsArgument(optionsArgument);
  return Bun.$`container pause ${args}`;
};
export const podmanContainerWait = async (
  optionsArgument: modPodmanContainerWait.optionsArgument,
) => {
  const args = modPodmanContainerWait.parseOptionsArgument(optionsArgument);
  return Bun.$`container wait ${args}`;
};
export const podmanContainerExport = async (
  optionsArgument: modPodmanContainerExport.optionsArgument,
) => {
  const args = modPodmanContainerExport.parseOptionsArgument(optionsArgument);
  return Bun.$`container export ${args}`;
};
export const podmanContainerList = async (
  optionsArgument: modPodmanContainerList.optionsArgument,
) => {
  const args = modPodmanContainerList.parseOptionsArgument(optionsArgument);
  return Bun.$`container list ${args}`;
};
export const podmanContainerCommit = async (
  optionsArgument: modPodmanContainerCommit.optionsArgument,
) => {
  const args = modPodmanContainerCommit.parseOptionsArgument(optionsArgument);
  return Bun.$`container commit ${args}`;
};
export const podmanContainerAttach = async (
  optionsArgument: modPodmanContainerAttach.optionsArgument,
) => {
  const args = modPodmanContainerAttach.parseOptionsArgument(optionsArgument);
  return Bun.$`container attach ${args}`;
};
export const podmanContainerExec = async (
  optionsArgument: modPodmanContainerExec.optionsArgument,
) => {
  const args = modPodmanContainerExec.parseOptionsArgument(optionsArgument);
  return Bun.$`container exec ${args}`;
};
export const podmanContainerStats = async (
  optionsArgument: modPodmanContainerStats.optionsArgument,
) => {
  const args = modPodmanContainerStats.parseOptionsArgument(optionsArgument);
  return Bun.$`container stats ${args}`;
};
export const podmanContainerPs = async (
  optionsArgument: modPodmanContainerPs.optionsArgument,
) => {
  const args = modPodmanContainerPs.parseOptionsArgument(optionsArgument);
  return Bun.$`container ps ${args}`;
};
export const podmanContainerRestart = async (
  optionsArgument: modPodmanContainerRestart.optionsArgument,
) => {
  const args = modPodmanContainerRestart.parseOptionsArgument(optionsArgument);
  return Bun.$`container restart ${args}`;
};
export const podmanContainerRestore = async (
  optionsArgument: modPodmanContainerRestore.optionsArgument,
) => {
  const args = modPodmanContainerRestore.parseOptionsArgument(optionsArgument);
  return Bun.$`container restore ${args}`;
};
export const podmanContainerExists = async (
  optionsArgument: modPodmanContainerExists.optionsArgument,
) => {
  const args = modPodmanContainerExists.parseOptionsArgument(optionsArgument);
  return Bun.$`container exists ${args}`;
};
export const podmanContainerStart = async (
  optionsArgument: modPodmanContainerStart.optionsArgument,
) => {
  const args = modPodmanContainerStart.parseOptionsArgument(optionsArgument);
  return Bun.$`container start ${args}`;
};
export const podmanNetwork = async (
  optionsArgument: modPodmanNetwork.optionsArgument,
) => {
  const args = modPodmanNetwork.parseOptionsArgument(optionsArgument);
  return Bun.$`podman network ${args}`;
};
export const podmanNetworkRm = async (
  optionsArgument: modPodmanNetworkRm.optionsArgument,
) => {
  const args = modPodmanNetworkRm.parseOptionsArgument(optionsArgument);
  return Bun.$`network rm ${args}`;
};
export const podmanNetworkLs = async (
  optionsArgument: modPodmanNetworkLs.optionsArgument,
) => {
  const args = modPodmanNetworkLs.parseOptionsArgument(optionsArgument);
  return Bun.$`network ls ${args}`;
};
export const podmanNetworkPrune = async (
  optionsArgument: modPodmanNetworkPrune.optionsArgument,
) => {
  const args = modPodmanNetworkPrune.parseOptionsArgument(optionsArgument);
  return Bun.$`network prune ${args}`;
};
export const podmanNetworkCreate = async (
  optionsArgument: modPodmanNetworkCreate.optionsArgument,
) => {
  const args = modPodmanNetworkCreate.parseOptionsArgument(optionsArgument);
  return Bun.$`network create ${args}`;
};
export const podmanNetworkUpdate = async (
  optionsArgument: modPodmanNetworkUpdate.optionsArgument,
) => {
  const args = modPodmanNetworkUpdate.parseOptionsArgument(optionsArgument);
  return Bun.$`network update ${args}`;
};
export const podmanNetworkInspect = async (
  optionsArgument: modPodmanNetworkInspect.optionsArgument,
) => {
  const args = modPodmanNetworkInspect.parseOptionsArgument(optionsArgument);
  return Bun.$`network inspect ${args}`;
};
export const podmanNetworkExists = async (
  optionsArgument: modPodmanNetworkExists.optionsArgument,
) => {
  const args = modPodmanNetworkExists.parseOptionsArgument(optionsArgument);
  return Bun.$`network exists ${args}`;
};
export const podmanNetworkConnect = async (
  optionsArgument: modPodmanNetworkConnect.optionsArgument,
) => {
  const args = modPodmanNetworkConnect.parseOptionsArgument(optionsArgument);
  return Bun.$`network connect ${args}`;
};
export const podmanNetworkDisconnect = async (
  optionsArgument: modPodmanNetworkDisconnect.optionsArgument,
) => {
  const args = modPodmanNetworkDisconnect.parseOptionsArgument(optionsArgument);
  return Bun.$`network disconnect ${args}`;
};
export const podmanPause = async (
  optionsArgument: modPodmanPause.optionsArgument,
) => {
  const args = modPodmanPause.parseOptionsArgument(optionsArgument);
  return Bun.$`podman pause ${args}`;
};
export const podmanRm = async (
  optionsArgument: modPodmanRm.optionsArgument,
) => {
  const args = modPodmanRm.parseOptionsArgument(optionsArgument);
  return Bun.$`podman rm ${args}`;
};
export const podmanUnpause = async (
  optionsArgument: modPodmanUnpause.optionsArgument,
) => {
  const args = modPodmanUnpause.parseOptionsArgument(optionsArgument);
  return Bun.$`podman unpause ${args}`;
};
export const podmanLoad = async (
  optionsArgument: modPodmanLoad.optionsArgument,
) => {
  const args = modPodmanLoad.parseOptionsArgument(optionsArgument);
  return Bun.$`podman load ${args}`;
};
export const podmanHistory = async (
  optionsArgument: modPodmanHistory.optionsArgument,
) => {
  const args = modPodmanHistory.parseOptionsArgument(optionsArgument);
  return Bun.$`podman history ${args}`;
};
export const podmanPod = async (
  optionsArgument: modPodmanPod.optionsArgument,
) => {
  const args = modPodmanPod.parseOptionsArgument(optionsArgument);
  return Bun.$`podman pod ${args}`;
};
export const podmanPodKill = async (
  optionsArgument: modPodmanPodKill.optionsArgument,
) => {
  const args = modPodmanPodKill.parseOptionsArgument(optionsArgument);
  return Bun.$`pod kill ${args}`;
};
export const podmanPodStart = async (
  optionsArgument: modPodmanPodStart.optionsArgument,
) => {
  const args = modPodmanPodStart.parseOptionsArgument(optionsArgument);
  return Bun.$`pod start ${args}`;
};
export const podmanPodPs = async (
  optionsArgument: modPodmanPodPs.optionsArgument,
) => {
  const args = modPodmanPodPs.parseOptionsArgument(optionsArgument);
  return Bun.$`pod ps ${args}`;
};
export const podmanPodLogs = async (
  optionsArgument: modPodmanPodLogs.optionsArgument,
) => {
  const args = modPodmanPodLogs.parseOptionsArgument(optionsArgument);
  return Bun.$`pod logs ${args}`;
};
export const podmanPodStop = async (
  optionsArgument: modPodmanPodStop.optionsArgument,
) => {
  const args = modPodmanPodStop.parseOptionsArgument(optionsArgument);
  return Bun.$`pod stop ${args}`;
};
export const podmanPodPause = async (
  optionsArgument: modPodmanPodPause.optionsArgument,
) => {
  const args = modPodmanPodPause.parseOptionsArgument(optionsArgument);
  return Bun.$`pod pause ${args}`;
};
export const podmanPodCreate = async (
  optionsArgument: modPodmanPodCreate.optionsArgument,
) => {
  const args = modPodmanPodCreate.parseOptionsArgument(optionsArgument);
  return Bun.$`pod create ${args}`;
};
export const podmanPodStats = async (
  optionsArgument: modPodmanPodStats.optionsArgument,
) => {
  const args = modPodmanPodStats.parseOptionsArgument(optionsArgument);
  return Bun.$`pod stats ${args}`;
};
export const podmanPodRestart = async (
  optionsArgument: modPodmanPodRestart.optionsArgument,
) => {
  const args = modPodmanPodRestart.parseOptionsArgument(optionsArgument);
  return Bun.$`pod restart ${args}`;
};
export const podmanPodPrune = async (
  optionsArgument: modPodmanPodPrune.optionsArgument,
) => {
  const args = modPodmanPodPrune.parseOptionsArgument(optionsArgument);
  return Bun.$`pod prune ${args}`;
};
export const podmanPodUnpause = async (
  optionsArgument: modPodmanPodUnpause.optionsArgument,
) => {
  const args = modPodmanPodUnpause.parseOptionsArgument(optionsArgument);
  return Bun.$`pod unpause ${args}`;
};
export const podmanPodRm = async (
  optionsArgument: modPodmanPodRm.optionsArgument,
) => {
  const args = modPodmanPodRm.parseOptionsArgument(optionsArgument);
  return Bun.$`pod rm ${args}`;
};
export const podmanPodTop = async (
  optionsArgument: modPodmanPodTop.optionsArgument,
) => {
  const args = modPodmanPodTop.parseOptionsArgument(optionsArgument);
  return Bun.$`pod top ${args}`;
};
export const podmanPodInspect = async (
  optionsArgument: modPodmanPodInspect.optionsArgument,
) => {
  const args = modPodmanPodInspect.parseOptionsArgument(optionsArgument);
  return Bun.$`pod inspect ${args}`;
};
export const podmanPodExists = async (
  optionsArgument: modPodmanPodExists.optionsArgument,
) => {
  const args = modPodmanPodExists.parseOptionsArgument(optionsArgument);
  return Bun.$`pod exists ${args}`;
};
export const podmanPodClone = async (
  optionsArgument: modPodmanPodClone.optionsArgument,
) => {
  const args = modPodmanPodClone.parseOptionsArgument(optionsArgument);
  return Bun.$`pod clone ${args}`;
};
export const podmanSearch = async (
  optionsArgument: modPodmanSearch.optionsArgument,
) => {
  const args = modPodmanSearch.parseOptionsArgument(optionsArgument);
  return Bun.$`podman search ${args}`;
};
export const podmanVolume = async (
  optionsArgument: modPodmanVolume.optionsArgument,
) => {
  const args = modPodmanVolume.parseOptionsArgument(optionsArgument);
  return Bun.$`podman volume ${args}`;
};
export const podmanVolumePrune = async (
  optionsArgument: modPodmanVolumePrune.optionsArgument,
) => {
  const args = modPodmanVolumePrune.parseOptionsArgument(optionsArgument);
  return Bun.$`volume prune ${args}`;
};
export const podmanVolumeExists = async (
  optionsArgument: modPodmanVolumeExists.optionsArgument,
) => {
  const args = modPodmanVolumeExists.parseOptionsArgument(optionsArgument);
  return Bun.$`volume exists ${args}`;
};
export const podmanVolumeReload = async (
  optionsArgument: modPodmanVolumeReload.optionsArgument,
) => {
  const args = modPodmanVolumeReload.parseOptionsArgument(optionsArgument);
  return Bun.$`volume reload ${args}`;
};
export const podmanVolumeInspect = async (
  optionsArgument: modPodmanVolumeInspect.optionsArgument,
) => {
  const args = modPodmanVolumeInspect.parseOptionsArgument(optionsArgument);
  return Bun.$`volume inspect ${args}`;
};
export const podmanVolumeCreate = async (
  optionsArgument: modPodmanVolumeCreate.optionsArgument,
) => {
  const args = modPodmanVolumeCreate.parseOptionsArgument(optionsArgument);
  return Bun.$`volume create ${args}`;
};
export const podmanVolumeRm = async (
  optionsArgument: modPodmanVolumeRm.optionsArgument,
) => {
  const args = modPodmanVolumeRm.parseOptionsArgument(optionsArgument);
  return Bun.$`volume rm ${args}`;
};
export const podmanVolumeLs = async (
  optionsArgument: modPodmanVolumeLs.optionsArgument,
) => {
  const args = modPodmanVolumeLs.parseOptionsArgument(optionsArgument);
  return Bun.$`volume ls ${args}`;
};
export const podmanRename = async (
  optionsArgument: modPodmanRename.optionsArgument,
) => {
  const args = modPodmanRename.parseOptionsArgument(optionsArgument);
  return Bun.$`podman rename ${args}`;
};
export const podmanInspect = async (
  optionsArgument: modPodmanInspect.optionsArgument,
) => {
  const args = modPodmanInspect.parseOptionsArgument(optionsArgument);
  return Bun.$`podman inspect ${args}`;
};
export const podmanStats = async (
  optionsArgument: modPodmanStats.optionsArgument,
) => {
  const args = modPodmanStats.parseOptionsArgument(optionsArgument);
  return Bun.$`podman stats ${args}`;
};
export const podmanSecret = async (
  optionsArgument: modPodmanSecret.optionsArgument,
) => {
  const args = modPodmanSecret.parseOptionsArgument(optionsArgument);
  return Bun.$`podman secret ${args}`;
};
export const podmanSecretLs = async (
  optionsArgument: modPodmanSecretLs.optionsArgument,
) => {
  const args = modPodmanSecretLs.parseOptionsArgument(optionsArgument);
  return Bun.$`secret ls ${args}`;
};
export const podmanSecretRm = async (
  optionsArgument: modPodmanSecretRm.optionsArgument,
) => {
  const args = modPodmanSecretRm.parseOptionsArgument(optionsArgument);
  return Bun.$`secret rm ${args}`;
};
export const podmanSecretInspect = async (
  optionsArgument: modPodmanSecretInspect.optionsArgument,
) => {
  const args = modPodmanSecretInspect.parseOptionsArgument(optionsArgument);
  return Bun.$`secret inspect ${args}`;
};
export const podmanSecretCreate = async (
  optionsArgument: modPodmanSecretCreate.optionsArgument,
) => {
  const args = modPodmanSecretCreate.parseOptionsArgument(optionsArgument);
  return Bun.$`secret create ${args}`;
};
export const podmanSecretExists = async (
  optionsArgument: modPodmanSecretExists.optionsArgument,
) => {
  const args = modPodmanSecretExists.parseOptionsArgument(optionsArgument);
  return Bun.$`secret exists ${args}`;
};
export const podmanCreate = async (
  optionsArgument: modPodmanCreate.optionsArgument,
) => {
  const args = modPodmanCreate.parseOptionsArgument(optionsArgument);
  return Bun.$`podman create ${args}`;
};
export const podmanImages = async (
  optionsArgument: modPodmanImages.optionsArgument,
) => {
  const args = modPodmanImages.parseOptionsArgument(optionsArgument);
  return Bun.$`podman images ${args}`;
};
export const podmanCp = async (
  optionsArgument: modPodmanCp.optionsArgument,
) => {
  const args = modPodmanCp.parseOptionsArgument(optionsArgument);
  return Bun.$`podman cp ${args}`;
};
export const podmanUpdate = async (
  optionsArgument: modPodmanUpdate.optionsArgument,
) => {
  const args = modPodmanUpdate.parseOptionsArgument(optionsArgument);
  return Bun.$`podman update ${args}`;
};
export const podmanPull = async (
  optionsArgument: modPodmanPull.optionsArgument,
) => {
  const args = modPodmanPull.parseOptionsArgument(optionsArgument);
  return Bun.$`podman pull ${args}`;
};
export const podmanExec = async (
  optionsArgument: modPodmanExec.optionsArgument,
) => {
  const args = modPodmanExec.parseOptionsArgument(optionsArgument);
  return Bun.$`podman exec ${args}`;
};
export const podmanVersion = async (
  optionsArgument: modPodmanVersion.optionsArgument,
) => {
  const args = modPodmanVersion.parseOptionsArgument(optionsArgument);
  return Bun.$`podman version ${args}`;
};
export const podmanStart = async (
  optionsArgument: modPodmanStart.optionsArgument,
) => {
  const args = modPodmanStart.parseOptionsArgument(optionsArgument);
  return Bun.$`podman start ${args}`;
};
export const podmanWait = async (
  optionsArgument: modPodmanWait.optionsArgument,
) => {
  const args = modPodmanWait.parseOptionsArgument(optionsArgument);
  return Bun.$`podman wait ${args}`;
};
export const podmanSave = async (
  optionsArgument: modPodmanSave.optionsArgument,
) => {
  const args = modPodmanSave.parseOptionsArgument(optionsArgument);
  return Bun.$`podman save ${args}`;
};
export const podmanKill = async (
  optionsArgument: modPodmanKill.optionsArgument,
) => {
  const args = modPodmanKill.parseOptionsArgument(optionsArgument);
  return Bun.$`podman kill ${args}`;
};
export const podmanInit = async (
  optionsArgument: modPodmanInit.optionsArgument,
) => {
  const args = modPodmanInit.parseOptionsArgument(optionsArgument);
  return Bun.$`podman init ${args}`;
};
export const podmanBuild = async (
  optionsArgument: modPodmanBuild.optionsArgument,
) => {
  const args = modPodmanBuild.parseOptionsArgument(optionsArgument);
  return Bun.$`podman build ${args}`;
};
export const podmanRun = async (
  optionsArgument: modPodmanRun.optionsArgument,
) => {
  const args = modPodmanRun.parseOptionsArgument(optionsArgument);
  return Bun.$`podman run ${args}`;
};
export const podmanLogs = async (
  optionsArgument: modPodmanLogs.optionsArgument,
) => {
  const args = modPodmanLogs.parseOptionsArgument(optionsArgument);
  return Bun.$`podman logs ${args}`;
};
export const podmanPs = async (
  optionsArgument: modPodmanPs.optionsArgument,
) => {
  const args = modPodmanPs.parseOptionsArgument(optionsArgument);
  return Bun.$`podman ps ${args}`;
};
export const podmanTag = async (
  optionsArgument: modPodmanTag.optionsArgument,
) => {
  const args = modPodmanTag.parseOptionsArgument(optionsArgument);
  return Bun.$`podman tag ${args}`;
};
export const podmanDiff = async (
  optionsArgument: modPodmanDiff.optionsArgument,
) => {
  const args = modPodmanDiff.parseOptionsArgument(optionsArgument);
  return Bun.$`podman diff ${args}`;
};
export const podmanPort = async (
  optionsArgument: modPodmanPort.optionsArgument,
) => {
  const args = modPodmanPort.parseOptionsArgument(optionsArgument);
  return Bun.$`podman port ${args}`;
};
export const podmanHelp = async (
  optionsArgument: modPodmanHelp.optionsArgument,
) => {
  const args = modPodmanHelp.parseOptionsArgument(optionsArgument);
  return Bun.$`podman help ${args}`;
};
export const podmanExport = async (
  optionsArgument: modPodmanExport.optionsArgument,
) => {
  const args = modPodmanExport.parseOptionsArgument(optionsArgument);
  return Bun.$`podman export ${args}`;
};
export const podmanLogout = async (
  optionsArgument: modPodmanLogout.optionsArgument,
) => {
  const args = modPodmanLogout.parseOptionsArgument(optionsArgument);
  return Bun.$`podman logout ${args}`;
};
export const podmanCommit = async (
  optionsArgument: modPodmanCommit.optionsArgument,
) => {
  const args = modPodmanCommit.parseOptionsArgument(optionsArgument);
  return Bun.$`podman commit ${args}`;
};
export const podmanUntag = async (
  optionsArgument: modPodmanUntag.optionsArgument,
) => {
  const args = modPodmanUntag.parseOptionsArgument(optionsArgument);
  return Bun.$`podman untag ${args}`;
};
export const podmanStop = async (
  optionsArgument: modPodmanStop.optionsArgument,
) => {
  const args = modPodmanStop.parseOptionsArgument(optionsArgument);
  return Bun.$`podman stop ${args}`;
};
export const podmanAttach = async (
  optionsArgument: modPodmanAttach.optionsArgument,
) => {
  const args = modPodmanAttach.parseOptionsArgument(optionsArgument);
  return Bun.$`podman attach ${args}`;
};
export const podmanRmi = async (
  optionsArgument: modPodmanRmi.optionsArgument,
) => {
  const args = modPodmanRmi.parseOptionsArgument(optionsArgument);
  return Bun.$`podman rmi ${args}`;
};
export const podmanPush = async (
  optionsArgument: modPodmanPush.optionsArgument,
) => {
  const args = modPodmanPush.parseOptionsArgument(optionsArgument);
  return Bun.$`podman push ${args}`;
};
export const podmanRestart = async (
  optionsArgument: modPodmanRestart.optionsArgument,
) => {
  const args = modPodmanRestart.parseOptionsArgument(optionsArgument);
  return Bun.$`podman restart ${args}`;
};
export const podmanTop = async (
  optionsArgument: modPodmanTop.optionsArgument,
) => {
  const args = modPodmanTop.parseOptionsArgument(optionsArgument);
  return Bun.$`podman top ${args}`;
};
export const podmanEvents = async (
  optionsArgument: modPodmanEvents.optionsArgument,
) => {
  const args = modPodmanEvents.parseOptionsArgument(optionsArgument);
  return Bun.$`podman events ${args}`;
};
export const podmanInfo = async (
  optionsArgument: modPodmanInfo.optionsArgument,
) => {
  const args = modPodmanInfo.parseOptionsArgument(optionsArgument);
  return Bun.$`podman info ${args}`;
};

podman.machine = podmanMachine;
podmanMachine.info = podmanMachineInfo;
podmanMachine.os = podmanMachineOs;
podmanMachineOs.apply = podmanMachineOsApply;
podmanMachine.stop = podmanMachineStop;
podmanMachine.ssh = podmanMachineSsh;
podmanMachine.reset = podmanMachineReset;
podmanMachine.init = podmanMachineInit;
podmanMachine.set = podmanMachineSet;
podmanMachine.list = podmanMachineList;
podmanMachine.start = podmanMachineStart;
podmanMachine.rm = podmanMachineRm;
podmanMachine.inspect = podmanMachineInspect;
podman.compose = podmanCompose;
podmanCompose.wait = podmanComposeWait;
podmanCompose.config = podmanComposeConfig;
podmanCompose.down = podmanComposeDown;
podmanCompose.up = podmanComposeUp;
podmanCompose.top = podmanComposeTop;
podmanCompose.watch = podmanComposeWatch;
podmanCompose.create = podmanComposeCreate;
podmanCompose.stats = podmanComposeStats;
podmanCompose.images = podmanComposeImages;
podmanCompose.exec = podmanComposeExec;
podmanCompose.pull = podmanComposePull;
podmanCompose.pause = podmanComposePause;
podmanCompose.scale = podmanComposeScale;
podmanCompose.restart = podmanComposeRestart;
podmanCompose.start = podmanComposeStart;
podmanCompose.ps = podmanComposePs;
podmanCompose.run = podmanComposeRun;
podmanCompose.push = podmanComposePush;
podmanCompose.unpause = podmanComposeUnpause;
podmanCompose.build = podmanComposeBuild;
podmanCompose.stop = podmanComposeStop;
podmanCompose.logs = podmanComposeLogs;
podmanCompose.events = podmanComposeEvents;
podmanCompose.cp = podmanComposeCp;
podmanCompose.port = podmanComposePort;
podmanCompose.ls = podmanComposeLs;
podmanCompose.version = podmanComposeVersion;
podmanCompose.rm = podmanComposeRm;
podmanCompose.kill = podmanComposeKill;
podmanCompose.attach = podmanComposeAttach;
podman.system = podmanSystem;
podmanSystem.connection = podmanSystemConnection;
podmanSystemConnection.add = podmanSystemConnectionAdd;
podmanSystemConnection.list = podmanSystemConnectionList;
podmanSystemConnection.remove = podmanSystemConnectionRemove;
podmanSystemConnection.rename = podmanSystemConnectionRename;
podmanSystemConnection.default = podmanSystemConnectionDefault;
podmanSystem.info = podmanSystemInfo;
podmanSystem.events = podmanSystemEvents;
podmanSystem.df = podmanSystemDf;
podmanSystem.prune = podmanSystemPrune;
podmanSystem.check = podmanSystemCheck;
podman.image = podmanImage;
podmanImage.scp = podmanImageScp;
podmanImage.push = podmanImagePush;
podmanImage.diff = podmanImageDiff;
podmanImage.import = podmanImageImport;
podmanImage.tree = podmanImageTree;
podmanImage.tag = podmanImageTag;
podmanImage.search = podmanImageSearch;
podmanImage.save = podmanImageSave;
podmanImage.build = podmanImageBuild;
podmanImage.rm = podmanImageRm;
podmanImage.history = podmanImageHistory;
podmanImage.list = podmanImageList;
podmanImage.inspect = podmanImageInspect;
podmanImage.pull = podmanImagePull;
podmanImage.prune = podmanImagePrune;
podmanImage.exists = podmanImageExists;
podmanImage.untag = podmanImageUntag;
podmanImage.load = podmanImageLoad;
podman.healthcheck = podmanHealthcheck;
podmanHealthcheck.run = podmanHealthcheckRun;
podman.farm = podmanFarm;
podmanFarm.remove = podmanFarmRemove;
podmanFarm.update = podmanFarmUpdate;
podmanFarm.create = podmanFarmCreate;
podmanFarm.list = podmanFarmList;
podmanFarm.build = podmanFarmBuild;
podman.manifest = podmanManifest;
podmanManifest.inspect = podmanManifestInspect;
podmanManifest.annotate = podmanManifestAnnotate;
podmanManifest.create = podmanManifestCreate;
podmanManifest.remove = podmanManifestRemove;
podmanManifest.add = podmanManifestAdd;
podmanManifest.rm = podmanManifestRm;
podmanManifest.push = podmanManifestPush;
podmanManifest.exists = podmanManifestExists;
podman.kube = podmanKube;
podmanKube.generate = podmanKubeGenerate;
podmanKube.down = podmanKubeDown;
podmanKube.apply = podmanKubeApply;
podmanKube.play = podmanKubePlay;
podman.login = podmanLogin;
podman.import = podmanImport;
podman.generate = podmanGenerate;
podmanGenerate.systemd = podmanGenerateSystemd;
podmanGenerate.spec = podmanGenerateSpec;
podmanGenerate.kube = podmanGenerateKube;
podman.container = podmanContainer;
podmanContainer.unpause = podmanContainerUnpause;
podmanContainer.stop = podmanContainerStop;
podmanContainer.top = podmanContainerTop;
podmanContainer.inspect = podmanContainerInspect;
podmanContainer.update = podmanContainerUpdate;
podmanContainer.checkpoint = podmanContainerCheckpoint;
podmanContainer.clone = podmanContainerClone;
podmanContainer.cp = podmanContainerCp;
podmanContainer.create = podmanContainerCreate;
podmanContainer.port = podmanContainerPort;
podmanContainer.diff = podmanContainerDiff;
podmanContainer.logs = podmanContainerLogs;
podmanContainer.rename = podmanContainerRename;
podmanContainer.prune = podmanContainerPrune;
podmanContainer.run = podmanContainerRun;
podmanContainer.rm = podmanContainerRm;
podmanContainer.init = podmanContainerInit;
podmanContainer.kill = podmanContainerKill;
podmanContainer.pause = podmanContainerPause;
podmanContainer.wait = podmanContainerWait;
podmanContainer.export = podmanContainerExport;
podmanContainer.list = podmanContainerList;
podmanContainer.commit = podmanContainerCommit;
podmanContainer.attach = podmanContainerAttach;
podmanContainer.exec = podmanContainerExec;
podmanContainer.stats = podmanContainerStats;
podmanContainer.ps = podmanContainerPs;
podmanContainer.restart = podmanContainerRestart;
podmanContainer.restore = podmanContainerRestore;
podmanContainer.exists = podmanContainerExists;
podmanContainer.start = podmanContainerStart;
podman.network = podmanNetwork;
podmanNetwork.rm = podmanNetworkRm;
podmanNetwork.ls = podmanNetworkLs;
podmanNetwork.prune = podmanNetworkPrune;
podmanNetwork.create = podmanNetworkCreate;
podmanNetwork.update = podmanNetworkUpdate;
podmanNetwork.inspect = podmanNetworkInspect;
podmanNetwork.exists = podmanNetworkExists;
podmanNetwork.connect = podmanNetworkConnect;
podmanNetwork.disconnect = podmanNetworkDisconnect;
podman.pause = podmanPause;
podman.rm = podmanRm;
podman.unpause = podmanUnpause;
podman.load = podmanLoad;
podman.history = podmanHistory;
podman.pod = podmanPod;
podmanPod.kill = podmanPodKill;
podmanPod.start = podmanPodStart;
podmanPod.ps = podmanPodPs;
podmanPod.logs = podmanPodLogs;
podmanPod.stop = podmanPodStop;
podmanPod.pause = podmanPodPause;
podmanPod.create = podmanPodCreate;
podmanPod.stats = podmanPodStats;
podmanPod.restart = podmanPodRestart;
podmanPod.prune = podmanPodPrune;
podmanPod.unpause = podmanPodUnpause;
podmanPod.rm = podmanPodRm;
podmanPod.top = podmanPodTop;
podmanPod.inspect = podmanPodInspect;
podmanPod.exists = podmanPodExists;
podmanPod.clone = podmanPodClone;
podman.search = podmanSearch;
podman.volume = podmanVolume;
podmanVolume.prune = podmanVolumePrune;
podmanVolume.exists = podmanVolumeExists;
podmanVolume.reload = podmanVolumeReload;
podmanVolume.inspect = podmanVolumeInspect;
podmanVolume.create = podmanVolumeCreate;
podmanVolume.rm = podmanVolumeRm;
podmanVolume.ls = podmanVolumeLs;
podman.rename = podmanRename;
podman.inspect = podmanInspect;
podman.stats = podmanStats;
podman.secret = podmanSecret;
podmanSecret.ls = podmanSecretLs;
podmanSecret.rm = podmanSecretRm;
podmanSecret.inspect = podmanSecretInspect;
podmanSecret.create = podmanSecretCreate;
podmanSecret.exists = podmanSecretExists;
podman.create = podmanCreate;
podman.images = podmanImages;
podman.cp = podmanCp;
podman.update = podmanUpdate;
podman.pull = podmanPull;
podman.exec = podmanExec;
podman.version = podmanVersion;
podman.start = podmanStart;
podman.wait = podmanWait;
podman.save = podmanSave;
podman.kill = podmanKill;
podman.init = podmanInit;
podman.build = podmanBuild;
podman.run = podmanRun;
podman.logs = podmanLogs;
podman.ps = podmanPs;
podman.tag = podmanTag;
podman.diff = podmanDiff;
podman.port = podmanPort;
podman.help = podmanHelp;
podman.export = podmanExport;
podman.logout = podmanLogout;
podman.commit = podmanCommit;
podman.untag = podmanUntag;
podman.stop = podmanStop;
podman.attach = podmanAttach;
podman.rmi = podmanRmi;
podman.push = podmanPush;
podman.restart = podmanRestart;
podman.top = podmanTop;
podman.events = podmanEvents;
podman.info = podmanInfo;
