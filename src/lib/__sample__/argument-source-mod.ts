import { modPodman } from "./modPodman.namespace.js";
import { modPodmanMachine } from "./modPodmanMachine.namespace.js";
import { modPodmanMachineInfo } from "./modPodmanMachineInfo.namespace.js";
import { modPodmanMachineOs } from "./modPodmanMachineOs.namespace.js";
import { modPodmanMachineOsApply } from "./modPodmanMachineOsApply.namespace.js";
import { modPodmanMachineStop } from "./modPodmanMachineStop.namespace.js";
import { modPodmanMachineSsh } from "./modPodmanMachineSsh.namespace.js";
import { modPodmanMachineReset } from "./modPodmanMachineReset.namespace.js";
import { modPodmanMachineInit } from "./modPodmanMachineInit.namespace.js";
import { modPodmanMachineSet } from "./modPodmanMachineSet.namespace.js";
import { modPodmanMachineList } from "./modPodmanMachineList.namespace.js";
import { modPodmanMachineStart } from "./modPodmanMachineStart.namespace.js";
import { modPodmanMachineRm } from "./modPodmanMachineRm.namespace.js";
import { modPodmanMachineInspect } from "./modPodmanMachineInspect.namespace.js";
import { modPodmanCompose } from "./modPodmanCompose.namespace.js";
import { modPodmanComposeWait } from "./modPodmanComposeWait.namespace.js";
import { modPodmanComposeConfig } from "./modPodmanComposeConfig.namespace.js";
import { modPodmanComposeDown } from "./modPodmanComposeDown.namespace.js";
import { modPodmanComposeUp } from "./modPodmanComposeUp.namespace.js";
import { modPodmanComposeTop } from "./modPodmanComposeTop.namespace.js";
import { modPodmanComposeWatch } from "./modPodmanComposeWatch.namespace.js";
import { modPodmanComposeCreate } from "./modPodmanComposeCreate.namespace.js";
import { modPodmanComposeStats } from "./modPodmanComposeStats.namespace.js";
import { modPodmanComposeImages } from "./modPodmanComposeImages.namespace.js";
import { modPodmanComposeExec } from "./modPodmanComposeExec.namespace.js";
import { modPodmanComposePull } from "./modPodmanComposePull.namespace.js";
import { modPodmanComposePause } from "./modPodmanComposePause.namespace.js";
import { modPodmanComposeScale } from "./modPodmanComposeScale.namespace.js";
import { modPodmanComposeRestart } from "./modPodmanComposeRestart.namespace.js";
import { modPodmanComposeStart } from "./modPodmanComposeStart.namespace.js";
import { modPodmanComposePs } from "./modPodmanComposePs.namespace.js";
import { modPodmanComposeRun } from "./modPodmanComposeRun.namespace.js";
import { modPodmanComposePush } from "./modPodmanComposePush.namespace.js";
import { modPodmanComposeUnpause } from "./modPodmanComposeUnpause.namespace.js";
import { modPodmanComposeBuild } from "./modPodmanComposeBuild.namespace.js";
import { modPodmanComposeStop } from "./modPodmanComposeStop.namespace.js";
import { modPodmanComposeLogs } from "./modPodmanComposeLogs.namespace.js";
import { modPodmanComposeEvents } from "./modPodmanComposeEvents.namespace.js";
import { modPodmanComposeCp } from "./modPodmanComposeCp.namespace.js";
import { modPodmanComposePort } from "./modPodmanComposePort.namespace.js";
import { modPodmanComposeLs } from "./modPodmanComposeLs.namespace.js";
import { modPodmanComposeVersion } from "./modPodmanComposeVersion.namespace.js";
import { modPodmanComposeRm } from "./modPodmanComposeRm.namespace.js";
import { modPodmanComposeKill } from "./modPodmanComposeKill.namespace.js";
import { modPodmanComposeAttach } from "./modPodmanComposeAttach.namespace.js";
import { modPodmanSystem } from "./modPodmanSystem.namespace.js";
import { modPodmanSystemConnection } from "./modPodmanSystemConnection.namespace.js";
import { modPodmanSystemConnectionAdd } from "./modPodmanSystemConnectionAdd.namespace.js";
import { modPodmanSystemConnectionList } from "./modPodmanSystemConnectionList.namespace.js";
import { modPodmanSystemConnectionRemove } from "./modPodmanSystemConnectionRemove.namespace.js";
import { modPodmanSystemConnectionRename } from "./modPodmanSystemConnectionRename.namespace.js";
import { modPodmanSystemConnectionDefault } from "./modPodmanSystemConnectionDefault.namespace.js";
import { modPodmanSystemInfo } from "./modPodmanSystemInfo.namespace.js";
import { modPodmanSystemEvents } from "./modPodmanSystemEvents.namespace.js";
import { modPodmanSystemDf } from "./modPodmanSystemDf.namespace.js";
import { modPodmanSystemPrune } from "./modPodmanSystemPrune.namespace.js";
import { modPodmanSystemCheck } from "./modPodmanSystemCheck.namespace.js";
import { modPodmanImage } from "./modPodmanImage.namespace.js";
import { modPodmanImageScp } from "./modPodmanImageScp.namespace.js";
import { modPodmanImagePush } from "./modPodmanImagePush.namespace.js";
import { modPodmanImageDiff } from "./modPodmanImageDiff.namespace.js";
import { modPodmanImageImport } from "./modPodmanImageImport.namespace.js";
import { modPodmanImageTree } from "./modPodmanImageTree.namespace.js";
import { modPodmanImageTag } from "./modPodmanImageTag.namespace.js";
import { modPodmanImageSearch } from "./modPodmanImageSearch.namespace.js";
import { modPodmanImageSave } from "./modPodmanImageSave.namespace.js";
import { modPodmanImageBuild } from "./modPodmanImageBuild.namespace.js";
import { modPodmanImageRm } from "./modPodmanImageRm.namespace.js";
import { modPodmanImageHistory } from "./modPodmanImageHistory.namespace.js";
import { modPodmanImageList } from "./modPodmanImageList.namespace.js";
import { modPodmanImageInspect } from "./modPodmanImageInspect.namespace.js";
import { modPodmanImagePull } from "./modPodmanImagePull.namespace.js";
import { modPodmanImagePrune } from "./modPodmanImagePrune.namespace.js";
import { modPodmanImageExists } from "./modPodmanImageExists.namespace.js";
import { modPodmanImageUntag } from "./modPodmanImageUntag.namespace.js";
import { modPodmanImageLoad } from "./modPodmanImageLoad.namespace.js";
import { modPodmanHealthcheck } from "./modPodmanHealthcheck.namespace.js";
import { modPodmanHealthcheckRun } from "./modPodmanHealthcheckRun.namespace.js";
import { modPodmanFarm } from "./modPodmanFarm.namespace.js";
import { modPodmanFarmRemove } from "./modPodmanFarmRemove.namespace.js";
import { modPodmanFarmUpdate } from "./modPodmanFarmUpdate.namespace.js";
import { modPodmanFarmCreate } from "./modPodmanFarmCreate.namespace.js";
import { modPodmanFarmList } from "./modPodmanFarmList.namespace.js";
import { modPodmanFarmBuild } from "./modPodmanFarmBuild.namespace.js";
import { modPodmanManifest } from "./modPodmanManifest.namespace.js";
import { modPodmanManifestInspect } from "./modPodmanManifestInspect.namespace.js";
import { modPodmanManifestAnnotate } from "./modPodmanManifestAnnotate.namespace.js";
import { modPodmanManifestCreate } from "./modPodmanManifestCreate.namespace.js";
import { modPodmanManifestRemove } from "./modPodmanManifestRemove.namespace.js";
import { modPodmanManifestAdd } from "./modPodmanManifestAdd.namespace.js";
import { modPodmanManifestRm } from "./modPodmanManifestRm.namespace.js";
import { modPodmanManifestPush } from "./modPodmanManifestPush.namespace.js";
import { modPodmanManifestExists } from "./modPodmanManifestExists.namespace.js";
import { modPodmanKube } from "./modPodmanKube.namespace.js";
import { modPodmanKubeGenerate } from "./modPodmanKubeGenerate.namespace.js";
import { modPodmanKubeDown } from "./modPodmanKubeDown.namespace.js";
import { modPodmanKubeApply } from "./modPodmanKubeApply.namespace.js";
import { modPodmanKubePlay } from "./modPodmanKubePlay.namespace.js";
import { modPodmanLogin } from "./modPodmanLogin.namespace.js";
import { modPodmanImport } from "./modPodmanImport.namespace.js";
import { modPodmanGenerate } from "./modPodmanGenerate.namespace.js";
import { modPodmanGenerateSystemd } from "./modPodmanGenerateSystemd.namespace.js";
import { modPodmanGenerateSpec } from "./modPodmanGenerateSpec.namespace.js";
import { modPodmanGenerateKube } from "./modPodmanGenerateKube.namespace.js";
import { modPodmanContainer } from "./modPodmanContainer.namespace.js";
import { modPodmanContainerUnpause } from "./modPodmanContainerUnpause.namespace.js";
import { modPodmanContainerStop } from "./modPodmanContainerStop.namespace.js";
import { modPodmanContainerTop } from "./modPodmanContainerTop.namespace.js";
import { modPodmanContainerInspect } from "./modPodmanContainerInspect.namespace.js";
import { modPodmanContainerUpdate } from "./modPodmanContainerUpdate.namespace.js";
import { modPodmanContainerCheckpoint } from "./modPodmanContainerCheckpoint.namespace.js";
import { modPodmanContainerClone } from "./modPodmanContainerClone.namespace.js";
import { modPodmanContainerCp } from "./modPodmanContainerCp.namespace.js";
import { modPodmanContainerCreate } from "./modPodmanContainerCreate.namespace.js";
import { modPodmanContainerPort } from "./modPodmanContainerPort.namespace.js";
import { modPodmanContainerDiff } from "./modPodmanContainerDiff.namespace.js";
import { modPodmanContainerLogs } from "./modPodmanContainerLogs.namespace.js";
import { modPodmanContainerRename } from "./modPodmanContainerRename.namespace.js";
import { modPodmanContainerPrune } from "./modPodmanContainerPrune.namespace.js";
import { modPodmanContainerRun } from "./modPodmanContainerRun.namespace.js";
import { modPodmanContainerRm } from "./modPodmanContainerRm.namespace.js";
import { modPodmanContainerInit } from "./modPodmanContainerInit.namespace.js";
import { modPodmanContainerKill } from "./modPodmanContainerKill.namespace.js";
import { modPodmanContainerPause } from "./modPodmanContainerPause.namespace.js";
import { modPodmanContainerWait } from "./modPodmanContainerWait.namespace.js";
import { modPodmanContainerExport } from "./modPodmanContainerExport.namespace.js";
import { modPodmanContainerList } from "./modPodmanContainerList.namespace.js";
import { modPodmanContainerCommit } from "./modPodmanContainerCommit.namespace.js";
import { modPodmanContainerAttach } from "./modPodmanContainerAttach.namespace.js";
import { modPodmanContainerExec } from "./modPodmanContainerExec.namespace.js";
import { modPodmanContainerStats } from "./modPodmanContainerStats.namespace.js";
import { modPodmanContainerPs } from "./modPodmanContainerPs.namespace.js";
import { modPodmanContainerRestart } from "./modPodmanContainerRestart.namespace.js";
import { modPodmanContainerRestore } from "./modPodmanContainerRestore.namespace.js";
import { modPodmanContainerExists } from "./modPodmanContainerExists.namespace.js";
import { modPodmanContainerStart } from "./modPodmanContainerStart.namespace.js";
import { modPodmanNetwork } from "./modPodmanNetwork.namespace.js";
import { modPodmanNetworkRm } from "./modPodmanNetworkRm.namespace.js";
import { modPodmanNetworkLs } from "./modPodmanNetworkLs.namespace.js";
import { modPodmanNetworkPrune } from "./modPodmanNetworkPrune.namespace.js";
import { modPodmanNetworkCreate } from "./modPodmanNetworkCreate.namespace.js";
import { modPodmanNetworkUpdate } from "./modPodmanNetworkUpdate.namespace.js";
import { modPodmanNetworkInspect } from "./modPodmanNetworkInspect.namespace.js";
import { modPodmanNetworkExists } from "./modPodmanNetworkExists.namespace.js";
import { modPodmanNetworkConnect } from "./modPodmanNetworkConnect.namespace.js";
import { modPodmanNetworkDisconnect } from "./modPodmanNetworkDisconnect.namespace.js";
import { modPodmanPause } from "./modPodmanPause.namespace.js";
import { modPodmanRm } from "./modPodmanRm.namespace.js";
import { modPodmanUnpause } from "./modPodmanUnpause.namespace.js";
import { modPodmanLoad } from "./modPodmanLoad.namespace.js";
import { modPodmanHistory } from "./modPodmanHistory.namespace.js";
import { modPodmanPod } from "./modPodmanPod.namespace.js";
import { modPodmanPodKill } from "./modPodmanPodKill.namespace.js";
import { modPodmanPodStart } from "./modPodmanPodStart.namespace.js";
import { modPodmanPodPs } from "./modPodmanPodPs.namespace.js";
import { modPodmanPodLogs } from "./modPodmanPodLogs.namespace.js";
import { modPodmanPodStop } from "./modPodmanPodStop.namespace.js";
import { modPodmanPodPause } from "./modPodmanPodPause.namespace.js";
import { modPodmanPodCreate } from "./modPodmanPodCreate.namespace.js";
import { modPodmanPodStats } from "./modPodmanPodStats.namespace.js";
import { modPodmanPodRestart } from "./modPodmanPodRestart.namespace.js";
import { modPodmanPodPrune } from "./modPodmanPodPrune.namespace.js";
import { modPodmanPodUnpause } from "./modPodmanPodUnpause.namespace.js";
import { modPodmanPodRm } from "./modPodmanPodRm.namespace.js";
import { modPodmanPodTop } from "./modPodmanPodTop.namespace.js";
import { modPodmanPodInspect } from "./modPodmanPodInspect.namespace.js";
import { modPodmanPodExists } from "./modPodmanPodExists.namespace.js";
import { modPodmanPodClone } from "./modPodmanPodClone.namespace.js";
import { modPodmanSearch } from "./modPodmanSearch.namespace.js";
import { modPodmanVolume } from "./modPodmanVolume.namespace.js";
import { modPodmanVolumePrune } from "./modPodmanVolumePrune.namespace.js";
import { modPodmanVolumeExists } from "./modPodmanVolumeExists.namespace.js";
import { modPodmanVolumeReload } from "./modPodmanVolumeReload.namespace.js";
import { modPodmanVolumeInspect } from "./modPodmanVolumeInspect.namespace.js";
import { modPodmanVolumeCreate } from "./modPodmanVolumeCreate.namespace.js";
import { modPodmanVolumeRm } from "./modPodmanVolumeRm.namespace.js";
import { modPodmanVolumeLs } from "./modPodmanVolumeLs.namespace.js";
import { modPodmanRename } from "./modPodmanRename.namespace.js";
import { modPodmanInspect } from "./modPodmanInspect.namespace.js";
import { modPodmanStats } from "./modPodmanStats.namespace.js";
import { modPodmanSecret } from "./modPodmanSecret.namespace.js";
import { modPodmanSecretLs } from "./modPodmanSecretLs.namespace.js";
import { modPodmanSecretRm } from "./modPodmanSecretRm.namespace.js";
import { modPodmanSecretInspect } from "./modPodmanSecretInspect.namespace.js";
import { modPodmanSecretCreate } from "./modPodmanSecretCreate.namespace.js";
import { modPodmanSecretExists } from "./modPodmanSecretExists.namespace.js";
import { modPodmanCreate } from "./modPodmanCreate.namespace.js";
import { modPodmanImages } from "./modPodmanImages.namespace.js";
import { modPodmanCp } from "./modPodmanCp.namespace.js";
import { modPodmanUpdate } from "./modPodmanUpdate.namespace.js";
import { modPodmanPull } from "./modPodmanPull.namespace.js";
import { modPodmanExec } from "./modPodmanExec.namespace.js";
import { modPodmanVersion } from "./modPodmanVersion.namespace.js";
import { modPodmanStart } from "./modPodmanStart.namespace.js";
import { modPodmanWait } from "./modPodmanWait.namespace.js";
import { modPodmanSave } from "./modPodmanSave.namespace.js";
import { modPodmanKill } from "./modPodmanKill.namespace.js";
import { modPodmanInit } from "./modPodmanInit.namespace.js";
import { modPodmanBuild } from "./modPodmanBuild.namespace.js";
import { modPodmanRun } from "./modPodmanRun.namespace.js";
import { modPodmanLogs } from "./modPodmanLogs.namespace.js";
import { modPodmanPs } from "./modPodmanPs.namespace.js";
import { modPodmanTag } from "./modPodmanTag.namespace.js";
import { modPodmanDiff } from "./modPodmanDiff.namespace.js";
import { modPodmanPort } from "./modPodmanPort.namespace.js";
import { modPodmanHelp } from "./modPodmanHelp.namespace.js";
import { modPodmanExport } from "./modPodmanExport.namespace.js";
import { modPodmanLogout } from "./modPodmanLogout.namespace.js";
import { modPodmanCommit } from "./modPodmanCommit.namespace.js";
import { modPodmanUntag } from "./modPodmanUntag.namespace.js";
import { modPodmanStop } from "./modPodmanStop.namespace.js";
import { modPodmanAttach } from "./modPodmanAttach.namespace.js";
import { modPodmanRmi } from "./modPodmanRmi.namespace.js";
import { modPodmanPush } from "./modPodmanPush.namespace.js";
import { modPodmanRestart } from "./modPodmanRestart.namespace.js";
import { modPodmanTop } from "./modPodmanTop.namespace.js";
import { modPodmanEvents } from "./modPodmanEvents.namespace.js";
import { modPodmanInfo } from "./modPodmanInfo.namespace.js";

export const podman = async (optionsArgument: modPodman.optionsArgument) => {const args = modPodman.parseOptionsArgument(optionsArgument);return Bun.$`podman ${args}`;}
export const podmanMachine = async (optionsArgument: modPodmanMachine.optionsArgument) => {const args = modPodmanMachine.parseOptionsArgument(optionsArgument);return Bun.$`podman machine ${args}`;}
export const podmanMachineInfo = async (optionsArgument: modPodmanMachineInfo.optionsArgument) => {const args = modPodmanMachineInfo.parseOptionsArgument(optionsArgument);return Bun.$`podman machine info ${args}`;}
export const podmanMachineOs = async (optionsArgument: modPodmanMachineOs.optionsArgument) => {const args = modPodmanMachineOs.parseOptionsArgument(optionsArgument);return Bun.$`podman machine os ${args}`;}
export const podmanMachineOsApply = async (optionsArgument: modPodmanMachineOsApply.optionsArgument) => {const args = modPodmanMachineOsApply.parseOptionsArgument(optionsArgument);return Bun.$`podman machine os apply ${args}`;}
export const podmanMachineStop = async (optionsArgument: modPodmanMachineStop.optionsArgument) => {const args = modPodmanMachineStop.parseOptionsArgument(optionsArgument);return Bun.$`podman machine stop ${args}`;}
export const podmanMachineSsh = async (optionsArgument: modPodmanMachineSsh.optionsArgument) => {const args = modPodmanMachineSsh.parseOptionsArgument(optionsArgument);return Bun.$`podman machine ssh ${args}`;}
export const podmanMachineReset = async (optionsArgument: modPodmanMachineReset.optionsArgument) => {const args = modPodmanMachineReset.parseOptionsArgument(optionsArgument);return Bun.$`podman machine reset ${args}`;}
export const podmanMachineInit = async (optionsArgument: modPodmanMachineInit.optionsArgument) => {const args = modPodmanMachineInit.parseOptionsArgument(optionsArgument);return Bun.$`podman machine init ${args}`;}
export const podmanMachineSet = async (optionsArgument: modPodmanMachineSet.optionsArgument) => {const args = modPodmanMachineSet.parseOptionsArgument(optionsArgument);return Bun.$`podman machine set ${args}`;}
export const podmanMachineList = async (optionsArgument: modPodmanMachineList.optionsArgument) => {const args = modPodmanMachineList.parseOptionsArgument(optionsArgument);return Bun.$`podman machine list ${args}`;}
export const podmanMachineStart = async (optionsArgument: modPodmanMachineStart.optionsArgument) => {const args = modPodmanMachineStart.parseOptionsArgument(optionsArgument);return Bun.$`podman machine start ${args}`;}
export const podmanMachineRm = async (optionsArgument: modPodmanMachineRm.optionsArgument) => {const args = modPodmanMachineRm.parseOptionsArgument(optionsArgument);return Bun.$`podman machine rm ${args}`;}
export const podmanMachineInspect = async (optionsArgument: modPodmanMachineInspect.optionsArgument) => {const args = modPodmanMachineInspect.parseOptionsArgument(optionsArgument);return Bun.$`podman machine inspect ${args}`;}
export const podmanCompose = async (optionsArgument: modPodmanCompose.optionsArgument) => {const args = modPodmanCompose.parseOptionsArgument(optionsArgument);return Bun.$`podman compose ${args}`;}
export const podmanComposeWait = async (optionsArgument: modPodmanComposeWait.optionsArgument) => {const args = modPodmanComposeWait.parseOptionsArgument(optionsArgument);return Bun.$`podman compose wait ${args}`;}
export const podmanComposeConfig = async (optionsArgument: modPodmanComposeConfig.optionsArgument) => {const args = modPodmanComposeConfig.parseOptionsArgument(optionsArgument);return Bun.$`podman compose config ${args}`;}
export const podmanComposeDown = async (optionsArgument: modPodmanComposeDown.optionsArgument) => {const args = modPodmanComposeDown.parseOptionsArgument(optionsArgument);return Bun.$`podman compose down ${args}`;}
export const podmanComposeUp = async (optionsArgument: modPodmanComposeUp.optionsArgument) => {const args = modPodmanComposeUp.parseOptionsArgument(optionsArgument);return Bun.$`podman compose up ${args}`;}
export const podmanComposeTop = async (optionsArgument: modPodmanComposeTop.optionsArgument) => {const args = modPodmanComposeTop.parseOptionsArgument(optionsArgument);return Bun.$`podman compose top ${args}`;}
export const podmanComposeWatch = async (optionsArgument: modPodmanComposeWatch.optionsArgument) => {const args = modPodmanComposeWatch.parseOptionsArgument(optionsArgument);return Bun.$`podman compose watch ${args}`;}
export const podmanComposeCreate = async (optionsArgument: modPodmanComposeCreate.optionsArgument) => {const args = modPodmanComposeCreate.parseOptionsArgument(optionsArgument);return Bun.$`podman compose create ${args}`;}
export const podmanComposeStats = async (optionsArgument: modPodmanComposeStats.optionsArgument) => {const args = modPodmanComposeStats.parseOptionsArgument(optionsArgument);return Bun.$`podman compose stats ${args}`;}
export const podmanComposeImages = async (optionsArgument: modPodmanComposeImages.optionsArgument) => {const args = modPodmanComposeImages.parseOptionsArgument(optionsArgument);return Bun.$`podman compose images ${args}`;}
export const podmanComposeExec = async (optionsArgument: modPodmanComposeExec.optionsArgument) => {const args = modPodmanComposeExec.parseOptionsArgument(optionsArgument);return Bun.$`podman compose exec ${args}`;}
export const podmanComposePull = async (optionsArgument: modPodmanComposePull.optionsArgument) => {const args = modPodmanComposePull.parseOptionsArgument(optionsArgument);return Bun.$`podman compose pull ${args}`;}
export const podmanComposePause = async (optionsArgument: modPodmanComposePause.optionsArgument) => {const args = modPodmanComposePause.parseOptionsArgument(optionsArgument);return Bun.$`podman compose pause ${args}`;}
export const podmanComposeScale = async (optionsArgument: modPodmanComposeScale.optionsArgument) => {const args = modPodmanComposeScale.parseOptionsArgument(optionsArgument);return Bun.$`podman compose scale ${args}`;}
export const podmanComposeRestart = async (optionsArgument: modPodmanComposeRestart.optionsArgument) => {const args = modPodmanComposeRestart.parseOptionsArgument(optionsArgument);return Bun.$`podman compose restart ${args}`;}
export const podmanComposeStart = async (optionsArgument: modPodmanComposeStart.optionsArgument) => {const args = modPodmanComposeStart.parseOptionsArgument(optionsArgument);return Bun.$`podman compose start ${args}`;}
export const podmanComposePs = async (optionsArgument: modPodmanComposePs.optionsArgument) => {const args = modPodmanComposePs.parseOptionsArgument(optionsArgument);return Bun.$`podman compose ps ${args}`;}
export const podmanComposeRun = async (optionsArgument: modPodmanComposeRun.optionsArgument) => {const args = modPodmanComposeRun.parseOptionsArgument(optionsArgument);return Bun.$`podman compose run ${args}`;}
export const podmanComposePush = async (optionsArgument: modPodmanComposePush.optionsArgument) => {const args = modPodmanComposePush.parseOptionsArgument(optionsArgument);return Bun.$`podman compose push ${args}`;}
export const podmanComposeUnpause = async (optionsArgument: modPodmanComposeUnpause.optionsArgument) => {const args = modPodmanComposeUnpause.parseOptionsArgument(optionsArgument);return Bun.$`podman compose unpause ${args}`;}
export const podmanComposeBuild = async (optionsArgument: modPodmanComposeBuild.optionsArgument) => {const args = modPodmanComposeBuild.parseOptionsArgument(optionsArgument);return Bun.$`podman compose build ${args}`;}
export const podmanComposeStop = async (optionsArgument: modPodmanComposeStop.optionsArgument) => {const args = modPodmanComposeStop.parseOptionsArgument(optionsArgument);return Bun.$`podman compose stop ${args}`;}
export const podmanComposeLogs = async (optionsArgument: modPodmanComposeLogs.optionsArgument) => {const args = modPodmanComposeLogs.parseOptionsArgument(optionsArgument);return Bun.$`podman compose logs ${args}`;}
export const podmanComposeEvents = async (optionsArgument: modPodmanComposeEvents.optionsArgument) => {const args = modPodmanComposeEvents.parseOptionsArgument(optionsArgument);return Bun.$`podman compose events ${args}`;}
export const podmanComposeCp = async (optionsArgument: modPodmanComposeCp.optionsArgument) => {const args = modPodmanComposeCp.parseOptionsArgument(optionsArgument);return Bun.$`podman compose cp ${args}`;}
export const podmanComposePort = async (optionsArgument: modPodmanComposePort.optionsArgument) => {const args = modPodmanComposePort.parseOptionsArgument(optionsArgument);return Bun.$`podman compose port ${args}`;}
export const podmanComposeLs = async (optionsArgument: modPodmanComposeLs.optionsArgument) => {const args = modPodmanComposeLs.parseOptionsArgument(optionsArgument);return Bun.$`podman compose ls ${args}`;}
export const podmanComposeVersion = async (optionsArgument: modPodmanComposeVersion.optionsArgument) => {const args = modPodmanComposeVersion.parseOptionsArgument(optionsArgument);return Bun.$`podman compose version ${args}`;}
export const podmanComposeRm = async (optionsArgument: modPodmanComposeRm.optionsArgument) => {const args = modPodmanComposeRm.parseOptionsArgument(optionsArgument);return Bun.$`podman compose rm ${args}`;}
export const podmanComposeKill = async (optionsArgument: modPodmanComposeKill.optionsArgument) => {const args = modPodmanComposeKill.parseOptionsArgument(optionsArgument);return Bun.$`podman compose kill ${args}`;}
export const podmanComposeAttach = async (optionsArgument: modPodmanComposeAttach.optionsArgument) => {const args = modPodmanComposeAttach.parseOptionsArgument(optionsArgument);return Bun.$`podman compose attach ${args}`;}
export const podmanSystem = async (optionsArgument: modPodmanSystem.optionsArgument) => {const args = modPodmanSystem.parseOptionsArgument(optionsArgument);return Bun.$`podman system ${args}`;}
export const podmanSystemConnection = async (optionsArgument: modPodmanSystemConnection.optionsArgument) => {const args = modPodmanSystemConnection.parseOptionsArgument(optionsArgument);return Bun.$`podman system connection ${args}`;}
export const podmanSystemConnectionAdd = async (optionsArgument: modPodmanSystemConnectionAdd.optionsArgument) => {const args = modPodmanSystemConnectionAdd.parseOptionsArgument(optionsArgument);return Bun.$`podman system connection add ${args}`;}
export const podmanSystemConnectionList = async (optionsArgument: modPodmanSystemConnectionList.optionsArgument) => {const args = modPodmanSystemConnectionList.parseOptionsArgument(optionsArgument);return Bun.$`podman system connection list ${args}`;}
export const podmanSystemConnectionRemove = async (optionsArgument: modPodmanSystemConnectionRemove.optionsArgument) => {const args = modPodmanSystemConnectionRemove.parseOptionsArgument(optionsArgument);return Bun.$`podman system connection remove ${args}`;}
export const podmanSystemConnectionRename = async (optionsArgument: modPodmanSystemConnectionRename.optionsArgument) => {const args = modPodmanSystemConnectionRename.parseOptionsArgument(optionsArgument);return Bun.$`podman system connection rename ${args}`;}
export const podmanSystemConnectionDefault = async (optionsArgument: modPodmanSystemConnectionDefault.optionsArgument) => {const args = modPodmanSystemConnectionDefault.parseOptionsArgument(optionsArgument);return Bun.$`podman system connection default ${args}`;}
export const podmanSystemInfo = async (optionsArgument: modPodmanSystemInfo.optionsArgument) => {const args = modPodmanSystemInfo.parseOptionsArgument(optionsArgument);return Bun.$`podman system info ${args}`;}
export const podmanSystemEvents = async (optionsArgument: modPodmanSystemEvents.optionsArgument) => {const args = modPodmanSystemEvents.parseOptionsArgument(optionsArgument);return Bun.$`podman system events ${args}`;}
export const podmanSystemDf = async (optionsArgument: modPodmanSystemDf.optionsArgument) => {const args = modPodmanSystemDf.parseOptionsArgument(optionsArgument);return Bun.$`podman system df ${args}`;}
export const podmanSystemPrune = async (optionsArgument: modPodmanSystemPrune.optionsArgument) => {const args = modPodmanSystemPrune.parseOptionsArgument(optionsArgument);return Bun.$`podman system prune ${args}`;}
export const podmanSystemCheck = async (optionsArgument: modPodmanSystemCheck.optionsArgument) => {const args = modPodmanSystemCheck.parseOptionsArgument(optionsArgument);return Bun.$`podman system check ${args}`;}
export const podmanImage = async (optionsArgument: modPodmanImage.optionsArgument) => {const args = modPodmanImage.parseOptionsArgument(optionsArgument);return Bun.$`podman image ${args}`;}
export const podmanImageScp = async (optionsArgument: modPodmanImageScp.optionsArgument) => {const args = modPodmanImageScp.parseOptionsArgument(optionsArgument);return Bun.$`podman image scp ${args}`;}
export const podmanImagePush = async (optionsArgument: modPodmanImagePush.optionsArgument) => {const args = modPodmanImagePush.parseOptionsArgument(optionsArgument);return Bun.$`podman image push ${args}`;}
export const podmanImageDiff = async (optionsArgument: modPodmanImageDiff.optionsArgument) => {const args = modPodmanImageDiff.parseOptionsArgument(optionsArgument);return Bun.$`podman image diff ${args}`;}
export const podmanImageImport = async (optionsArgument: modPodmanImageImport.optionsArgument) => {const args = modPodmanImageImport.parseOptionsArgument(optionsArgument);return Bun.$`podman image import ${args}`;}
export const podmanImageTree = async (optionsArgument: modPodmanImageTree.optionsArgument) => {const args = modPodmanImageTree.parseOptionsArgument(optionsArgument);return Bun.$`podman image tree ${args}`;}
export const podmanImageTag = async (optionsArgument: modPodmanImageTag.optionsArgument) => {const args = modPodmanImageTag.parseOptionsArgument(optionsArgument);return Bun.$`podman image tag ${args}`;}
export const podmanImageSearch = async (optionsArgument: modPodmanImageSearch.optionsArgument) => {const args = modPodmanImageSearch.parseOptionsArgument(optionsArgument);return Bun.$`podman image search ${args}`;}
export const podmanImageSave = async (optionsArgument: modPodmanImageSave.optionsArgument) => {const args = modPodmanImageSave.parseOptionsArgument(optionsArgument);return Bun.$`podman image save ${args}`;}
export const podmanImageBuild = async (optionsArgument: modPodmanImageBuild.optionsArgument) => {const args = modPodmanImageBuild.parseOptionsArgument(optionsArgument);return Bun.$`podman image build ${args}`;}
export const podmanImageRm = async (optionsArgument: modPodmanImageRm.optionsArgument) => {const args = modPodmanImageRm.parseOptionsArgument(optionsArgument);return Bun.$`podman image rm ${args}`;}
export const podmanImageHistory = async (optionsArgument: modPodmanImageHistory.optionsArgument) => {const args = modPodmanImageHistory.parseOptionsArgument(optionsArgument);return Bun.$`podman image history ${args}`;}
export const podmanImageList = async (optionsArgument: modPodmanImageList.optionsArgument) => {const args = modPodmanImageList.parseOptionsArgument(optionsArgument);return Bun.$`podman image list ${args}`;}
export const podmanImageInspect = async (optionsArgument: modPodmanImageInspect.optionsArgument) => {const args = modPodmanImageInspect.parseOptionsArgument(optionsArgument);return Bun.$`podman image inspect ${args}`;}
export const podmanImagePull = async (optionsArgument: modPodmanImagePull.optionsArgument) => {const args = modPodmanImagePull.parseOptionsArgument(optionsArgument);return Bun.$`podman image pull ${args}`;}
export const podmanImagePrune = async (optionsArgument: modPodmanImagePrune.optionsArgument) => {const args = modPodmanImagePrune.parseOptionsArgument(optionsArgument);return Bun.$`podman image prune ${args}`;}
export const podmanImageExists = async (optionsArgument: modPodmanImageExists.optionsArgument) => {const args = modPodmanImageExists.parseOptionsArgument(optionsArgument);return Bun.$`podman image exists ${args}`;}
export const podmanImageUntag = async (optionsArgument: modPodmanImageUntag.optionsArgument) => {const args = modPodmanImageUntag.parseOptionsArgument(optionsArgument);return Bun.$`podman image untag ${args}`;}
export const podmanImageLoad = async (optionsArgument: modPodmanImageLoad.optionsArgument) => {const args = modPodmanImageLoad.parseOptionsArgument(optionsArgument);return Bun.$`podman image load ${args}`;}
export const podmanHealthcheck = async (optionsArgument: modPodmanHealthcheck.optionsArgument) => {const args = modPodmanHealthcheck.parseOptionsArgument(optionsArgument);return Bun.$`podman healthcheck ${args}`;}
export const podmanHealthcheckRun = async (optionsArgument: modPodmanHealthcheckRun.optionsArgument) => {const args = modPodmanHealthcheckRun.parseOptionsArgument(optionsArgument);return Bun.$`podman healthcheck run ${args}`;}
export const podmanFarm = async (optionsArgument: modPodmanFarm.optionsArgument) => {const args = modPodmanFarm.parseOptionsArgument(optionsArgument);return Bun.$`podman farm ${args}`;}
export const podmanFarmRemove = async (optionsArgument: modPodmanFarmRemove.optionsArgument) => {const args = modPodmanFarmRemove.parseOptionsArgument(optionsArgument);return Bun.$`podman farm remove ${args}`;}
export const podmanFarmUpdate = async (optionsArgument: modPodmanFarmUpdate.optionsArgument) => {const args = modPodmanFarmUpdate.parseOptionsArgument(optionsArgument);return Bun.$`podman farm update ${args}`;}
export const podmanFarmCreate = async (optionsArgument: modPodmanFarmCreate.optionsArgument) => {const args = modPodmanFarmCreate.parseOptionsArgument(optionsArgument);return Bun.$`podman farm create ${args}`;}
export const podmanFarmList = async (optionsArgument: modPodmanFarmList.optionsArgument) => {const args = modPodmanFarmList.parseOptionsArgument(optionsArgument);return Bun.$`podman farm list ${args}`;}
export const podmanFarmBuild = async (optionsArgument: modPodmanFarmBuild.optionsArgument) => {const args = modPodmanFarmBuild.parseOptionsArgument(optionsArgument);return Bun.$`podman farm build ${args}`;}
export const podmanManifest = async (optionsArgument: modPodmanManifest.optionsArgument) => {const args = modPodmanManifest.parseOptionsArgument(optionsArgument);return Bun.$`podman manifest ${args}`;}
export const podmanManifestInspect = async (optionsArgument: modPodmanManifestInspect.optionsArgument) => {const args = modPodmanManifestInspect.parseOptionsArgument(optionsArgument);return Bun.$`podman manifest inspect ${args}`;}
export const podmanManifestAnnotate = async (optionsArgument: modPodmanManifestAnnotate.optionsArgument) => {const args = modPodmanManifestAnnotate.parseOptionsArgument(optionsArgument);return Bun.$`podman manifest annotate ${args}`;}
export const podmanManifestCreate = async (optionsArgument: modPodmanManifestCreate.optionsArgument) => {const args = modPodmanManifestCreate.parseOptionsArgument(optionsArgument);return Bun.$`podman manifest create ${args}`;}
export const podmanManifestRemove = async (optionsArgument: modPodmanManifestRemove.optionsArgument) => {const args = modPodmanManifestRemove.parseOptionsArgument(optionsArgument);return Bun.$`podman manifest remove ${args}`;}
export const podmanManifestAdd = async (optionsArgument: modPodmanManifestAdd.optionsArgument) => {const args = modPodmanManifestAdd.parseOptionsArgument(optionsArgument);return Bun.$`podman manifest add ${args}`;}
export const podmanManifestRm = async (optionsArgument: modPodmanManifestRm.optionsArgument) => {const args = modPodmanManifestRm.parseOptionsArgument(optionsArgument);return Bun.$`podman manifest rm ${args}`;}
export const podmanManifestPush = async (optionsArgument: modPodmanManifestPush.optionsArgument) => {const args = modPodmanManifestPush.parseOptionsArgument(optionsArgument);return Bun.$`podman manifest push ${args}`;}
export const podmanManifestExists = async (optionsArgument: modPodmanManifestExists.optionsArgument) => {const args = modPodmanManifestExists.parseOptionsArgument(optionsArgument);return Bun.$`podman manifest exists ${args}`;}
export const podmanKube = async (optionsArgument: modPodmanKube.optionsArgument) => {const args = modPodmanKube.parseOptionsArgument(optionsArgument);return Bun.$`podman kube ${args}`;}
export const podmanKubeGenerate = async (optionsArgument: modPodmanKubeGenerate.optionsArgument) => {const args = modPodmanKubeGenerate.parseOptionsArgument(optionsArgument);return Bun.$`podman kube generate ${args}`;}
export const podmanKubeDown = async (optionsArgument: modPodmanKubeDown.optionsArgument) => {const args = modPodmanKubeDown.parseOptionsArgument(optionsArgument);return Bun.$`podman kube down ${args}`;}
export const podmanKubeApply = async (optionsArgument: modPodmanKubeApply.optionsArgument) => {const args = modPodmanKubeApply.parseOptionsArgument(optionsArgument);return Bun.$`podman kube apply ${args}`;}
export const podmanKubePlay = async (optionsArgument: modPodmanKubePlay.optionsArgument) => {const args = modPodmanKubePlay.parseOptionsArgument(optionsArgument);return Bun.$`podman kube play ${args}`;}
export const podmanLogin = async (optionsArgument: modPodmanLogin.optionsArgument) => {const args = modPodmanLogin.parseOptionsArgument(optionsArgument);return Bun.$`podman login ${args}`;}
export const podmanImport = async (optionsArgument: modPodmanImport.optionsArgument) => {const args = modPodmanImport.parseOptionsArgument(optionsArgument);return Bun.$`podman import ${args}`;}
export const podmanGenerate = async (optionsArgument: modPodmanGenerate.optionsArgument) => {const args = modPodmanGenerate.parseOptionsArgument(optionsArgument);return Bun.$`podman generate ${args}`;}
export const podmanGenerateSystemd = async (optionsArgument: modPodmanGenerateSystemd.optionsArgument) => {const args = modPodmanGenerateSystemd.parseOptionsArgument(optionsArgument);return Bun.$`podman generate systemd ${args}`;}
export const podmanGenerateSpec = async (optionsArgument: modPodmanGenerateSpec.optionsArgument) => {const args = modPodmanGenerateSpec.parseOptionsArgument(optionsArgument);return Bun.$`podman generate spec ${args}`;}
export const podmanGenerateKube = async (optionsArgument: modPodmanGenerateKube.optionsArgument) => {const args = modPodmanGenerateKube.parseOptionsArgument(optionsArgument);return Bun.$`podman generate kube ${args}`;}
export const podmanContainer = async (optionsArgument: modPodmanContainer.optionsArgument) => {const args = modPodmanContainer.parseOptionsArgument(optionsArgument);return Bun.$`podman container ${args}`;}
export const podmanContainerUnpause = async (optionsArgument: modPodmanContainerUnpause.optionsArgument) => {const args = modPodmanContainerUnpause.parseOptionsArgument(optionsArgument);return Bun.$`podman container unpause ${args}`;}
export const podmanContainerStop = async (optionsArgument: modPodmanContainerStop.optionsArgument) => {const args = modPodmanContainerStop.parseOptionsArgument(optionsArgument);return Bun.$`podman container stop ${args}`;}
export const podmanContainerTop = async (optionsArgument: modPodmanContainerTop.optionsArgument) => {const args = modPodmanContainerTop.parseOptionsArgument(optionsArgument);return Bun.$`podman container top ${args}`;}
export const podmanContainerInspect = async (optionsArgument: modPodmanContainerInspect.optionsArgument) => {const args = modPodmanContainerInspect.parseOptionsArgument(optionsArgument);return Bun.$`podman container inspect ${args}`;}
export const podmanContainerUpdate = async (optionsArgument: modPodmanContainerUpdate.optionsArgument) => {const args = modPodmanContainerUpdate.parseOptionsArgument(optionsArgument);return Bun.$`podman container update ${args}`;}
export const podmanContainerCheckpoint = async (optionsArgument: modPodmanContainerCheckpoint.optionsArgument) => {const args = modPodmanContainerCheckpoint.parseOptionsArgument(optionsArgument);return Bun.$`podman container checkpoint ${args}`;}
export const podmanContainerClone = async (optionsArgument: modPodmanContainerClone.optionsArgument) => {const args = modPodmanContainerClone.parseOptionsArgument(optionsArgument);return Bun.$`podman container clone ${args}`;}
export const podmanContainerCp = async (optionsArgument: modPodmanContainerCp.optionsArgument) => {const args = modPodmanContainerCp.parseOptionsArgument(optionsArgument);return Bun.$`podman container cp ${args}`;}
export const podmanContainerCreate = async (optionsArgument: modPodmanContainerCreate.optionsArgument) => {const args = modPodmanContainerCreate.parseOptionsArgument(optionsArgument);return Bun.$`podman container create ${args}`;}
export const podmanContainerPort = async (optionsArgument: modPodmanContainerPort.optionsArgument) => {const args = modPodmanContainerPort.parseOptionsArgument(optionsArgument);return Bun.$`podman container port ${args}`;}
export const podmanContainerDiff = async (optionsArgument: modPodmanContainerDiff.optionsArgument) => {const args = modPodmanContainerDiff.parseOptionsArgument(optionsArgument);return Bun.$`podman container diff ${args}`;}
export const podmanContainerLogs = async (optionsArgument: modPodmanContainerLogs.optionsArgument) => {const args = modPodmanContainerLogs.parseOptionsArgument(optionsArgument);return Bun.$`podman container logs ${args}`;}
export const podmanContainerRename = async (optionsArgument: modPodmanContainerRename.optionsArgument) => {const args = modPodmanContainerRename.parseOptionsArgument(optionsArgument);return Bun.$`podman container rename ${args}`;}
export const podmanContainerPrune = async (optionsArgument: modPodmanContainerPrune.optionsArgument) => {const args = modPodmanContainerPrune.parseOptionsArgument(optionsArgument);return Bun.$`podman container prune ${args}`;}
export const podmanContainerRun = async (optionsArgument: modPodmanContainerRun.optionsArgument) => {const args = modPodmanContainerRun.parseOptionsArgument(optionsArgument);return Bun.$`podman container run ${args}`;}
export const podmanContainerRm = async (optionsArgument: modPodmanContainerRm.optionsArgument) => {const args = modPodmanContainerRm.parseOptionsArgument(optionsArgument);return Bun.$`podman container rm ${args}`;}
export const podmanContainerInit = async (optionsArgument: modPodmanContainerInit.optionsArgument) => {const args = modPodmanContainerInit.parseOptionsArgument(optionsArgument);return Bun.$`podman container init ${args}`;}
export const podmanContainerKill = async (optionsArgument: modPodmanContainerKill.optionsArgument) => {const args = modPodmanContainerKill.parseOptionsArgument(optionsArgument);return Bun.$`podman container kill ${args}`;}
export const podmanContainerPause = async (optionsArgument: modPodmanContainerPause.optionsArgument) => {const args = modPodmanContainerPause.parseOptionsArgument(optionsArgument);return Bun.$`podman container pause ${args}`;}
export const podmanContainerWait = async (optionsArgument: modPodmanContainerWait.optionsArgument) => {const args = modPodmanContainerWait.parseOptionsArgument(optionsArgument);return Bun.$`podman container wait ${args}`;}
export const podmanContainerExport = async (optionsArgument: modPodmanContainerExport.optionsArgument) => {const args = modPodmanContainerExport.parseOptionsArgument(optionsArgument);return Bun.$`podman container export ${args}`;}
export const podmanContainerList = async (optionsArgument: modPodmanContainerList.optionsArgument) => {const args = modPodmanContainerList.parseOptionsArgument(optionsArgument);return Bun.$`podman container list ${args}`;}
export const podmanContainerCommit = async (optionsArgument: modPodmanContainerCommit.optionsArgument) => {const args = modPodmanContainerCommit.parseOptionsArgument(optionsArgument);return Bun.$`podman container commit ${args}`;}
export const podmanContainerAttach = async (optionsArgument: modPodmanContainerAttach.optionsArgument) => {const args = modPodmanContainerAttach.parseOptionsArgument(optionsArgument);return Bun.$`podman container attach ${args}`;}
export const podmanContainerExec = async (optionsArgument: modPodmanContainerExec.optionsArgument) => {const args = modPodmanContainerExec.parseOptionsArgument(optionsArgument);return Bun.$`podman container exec ${args}`;}
export const podmanContainerStats = async (optionsArgument: modPodmanContainerStats.optionsArgument) => {const args = modPodmanContainerStats.parseOptionsArgument(optionsArgument);return Bun.$`podman container stats ${args}`;}
export const podmanContainerPs = async (optionsArgument: modPodmanContainerPs.optionsArgument) => {const args = modPodmanContainerPs.parseOptionsArgument(optionsArgument);return Bun.$`podman container ps ${args}`;}
export const podmanContainerRestart = async (optionsArgument: modPodmanContainerRestart.optionsArgument) => {const args = modPodmanContainerRestart.parseOptionsArgument(optionsArgument);return Bun.$`podman container restart ${args}`;}
export const podmanContainerRestore = async (optionsArgument: modPodmanContainerRestore.optionsArgument) => {const args = modPodmanContainerRestore.parseOptionsArgument(optionsArgument);return Bun.$`podman container restore ${args}`;}
export const podmanContainerExists = async (optionsArgument: modPodmanContainerExists.optionsArgument) => {const args = modPodmanContainerExists.parseOptionsArgument(optionsArgument);return Bun.$`podman container exists ${args}`;}
export const podmanContainerStart = async (optionsArgument: modPodmanContainerStart.optionsArgument) => {const args = modPodmanContainerStart.parseOptionsArgument(optionsArgument);return Bun.$`podman container start ${args}`;}
export const podmanNetwork = async (optionsArgument: modPodmanNetwork.optionsArgument) => {const args = modPodmanNetwork.parseOptionsArgument(optionsArgument);return Bun.$`podman network ${args}`;}
export const podmanNetworkRm = async (optionsArgument: modPodmanNetworkRm.optionsArgument) => {const args = modPodmanNetworkRm.parseOptionsArgument(optionsArgument);return Bun.$`podman network rm ${args}`;}
export const podmanNetworkLs = async (optionsArgument: modPodmanNetworkLs.optionsArgument) => {const args = modPodmanNetworkLs.parseOptionsArgument(optionsArgument);return Bun.$`podman network ls ${args}`;}
export const podmanNetworkPrune = async (optionsArgument: modPodmanNetworkPrune.optionsArgument) => {const args = modPodmanNetworkPrune.parseOptionsArgument(optionsArgument);return Bun.$`podman network prune ${args}`;}
export const podmanNetworkCreate = async (optionsArgument: modPodmanNetworkCreate.optionsArgument) => {const args = modPodmanNetworkCreate.parseOptionsArgument(optionsArgument);return Bun.$`podman network create ${args}`;}
export const podmanNetworkUpdate = async (optionsArgument: modPodmanNetworkUpdate.optionsArgument) => {const args = modPodmanNetworkUpdate.parseOptionsArgument(optionsArgument);return Bun.$`podman network update ${args}`;}
export const podmanNetworkInspect = async (optionsArgument: modPodmanNetworkInspect.optionsArgument) => {const args = modPodmanNetworkInspect.parseOptionsArgument(optionsArgument);return Bun.$`podman network inspect ${args}`;}
export const podmanNetworkExists = async (optionsArgument: modPodmanNetworkExists.optionsArgument) => {const args = modPodmanNetworkExists.parseOptionsArgument(optionsArgument);return Bun.$`podman network exists ${args}`;}
export const podmanNetworkConnect = async (optionsArgument: modPodmanNetworkConnect.optionsArgument) => {const args = modPodmanNetworkConnect.parseOptionsArgument(optionsArgument);return Bun.$`podman network connect ${args}`;}
export const podmanNetworkDisconnect = async (optionsArgument: modPodmanNetworkDisconnect.optionsArgument) => {const args = modPodmanNetworkDisconnect.parseOptionsArgument(optionsArgument);return Bun.$`podman network disconnect ${args}`;}
export const podmanPause = async (optionsArgument: modPodmanPause.optionsArgument) => {const args = modPodmanPause.parseOptionsArgument(optionsArgument);return Bun.$`podman pause ${args}`;}
export const podmanRm = async (optionsArgument: modPodmanRm.optionsArgument) => {const args = modPodmanRm.parseOptionsArgument(optionsArgument);return Bun.$`podman rm ${args}`;}
export const podmanUnpause = async (optionsArgument: modPodmanUnpause.optionsArgument) => {const args = modPodmanUnpause.parseOptionsArgument(optionsArgument);return Bun.$`podman unpause ${args}`;}
export const podmanLoad = async (optionsArgument: modPodmanLoad.optionsArgument) => {const args = modPodmanLoad.parseOptionsArgument(optionsArgument);return Bun.$`podman load ${args}`;}
export const podmanHistory = async (optionsArgument: modPodmanHistory.optionsArgument) => {const args = modPodmanHistory.parseOptionsArgument(optionsArgument);return Bun.$`podman history ${args}`;}
export const podmanPod = async (optionsArgument: modPodmanPod.optionsArgument) => {const args = modPodmanPod.parseOptionsArgument(optionsArgument);return Bun.$`podman pod ${args}`;}
export const podmanPodKill = async (optionsArgument: modPodmanPodKill.optionsArgument) => {const args = modPodmanPodKill.parseOptionsArgument(optionsArgument);return Bun.$`podman pod kill ${args}`;}
export const podmanPodStart = async (optionsArgument: modPodmanPodStart.optionsArgument) => {const args = modPodmanPodStart.parseOptionsArgument(optionsArgument);return Bun.$`podman pod start ${args}`;}
export const podmanPodPs = async (optionsArgument: modPodmanPodPs.optionsArgument) => {const args = modPodmanPodPs.parseOptionsArgument(optionsArgument);return Bun.$`podman pod ps ${args}`;}
export const podmanPodLogs = async (optionsArgument: modPodmanPodLogs.optionsArgument) => {const args = modPodmanPodLogs.parseOptionsArgument(optionsArgument);return Bun.$`podman pod logs ${args}`;}
export const podmanPodStop = async (optionsArgument: modPodmanPodStop.optionsArgument) => {const args = modPodmanPodStop.parseOptionsArgument(optionsArgument);return Bun.$`podman pod stop ${args}`;}
export const podmanPodPause = async (optionsArgument: modPodmanPodPause.optionsArgument) => {const args = modPodmanPodPause.parseOptionsArgument(optionsArgument);return Bun.$`podman pod pause ${args}`;}
export const podmanPodCreate = async (optionsArgument: modPodmanPodCreate.optionsArgument) => {const args = modPodmanPodCreate.parseOptionsArgument(optionsArgument);return Bun.$`podman pod create ${args}`;}
export const podmanPodStats = async (optionsArgument: modPodmanPodStats.optionsArgument) => {const args = modPodmanPodStats.parseOptionsArgument(optionsArgument);return Bun.$`podman pod stats ${args}`;}
export const podmanPodRestart = async (optionsArgument: modPodmanPodRestart.optionsArgument) => {const args = modPodmanPodRestart.parseOptionsArgument(optionsArgument);return Bun.$`podman pod restart ${args}`;}
export const podmanPodPrune = async (optionsArgument: modPodmanPodPrune.optionsArgument) => {const args = modPodmanPodPrune.parseOptionsArgument(optionsArgument);return Bun.$`podman pod prune ${args}`;}
export const podmanPodUnpause = async (optionsArgument: modPodmanPodUnpause.optionsArgument) => {const args = modPodmanPodUnpause.parseOptionsArgument(optionsArgument);return Bun.$`podman pod unpause ${args}`;}
export const podmanPodRm = async (optionsArgument: modPodmanPodRm.optionsArgument) => {const args = modPodmanPodRm.parseOptionsArgument(optionsArgument);return Bun.$`podman pod rm ${args}`;}
export const podmanPodTop = async (optionsArgument: modPodmanPodTop.optionsArgument) => {const args = modPodmanPodTop.parseOptionsArgument(optionsArgument);return Bun.$`podman pod top ${args}`;}
export const podmanPodInspect = async (optionsArgument: modPodmanPodInspect.optionsArgument) => {const args = modPodmanPodInspect.parseOptionsArgument(optionsArgument);return Bun.$`podman pod inspect ${args}`;}
export const podmanPodExists = async (optionsArgument: modPodmanPodExists.optionsArgument) => {const args = modPodmanPodExists.parseOptionsArgument(optionsArgument);return Bun.$`podman pod exists ${args}`;}
export const podmanPodClone = async (optionsArgument: modPodmanPodClone.optionsArgument) => {const args = modPodmanPodClone.parseOptionsArgument(optionsArgument);return Bun.$`podman pod clone ${args}`;}
export const podmanSearch = async (optionsArgument: modPodmanSearch.optionsArgument) => {const args = modPodmanSearch.parseOptionsArgument(optionsArgument);return Bun.$`podman search ${args}`;}
export const podmanVolume = async (optionsArgument: modPodmanVolume.optionsArgument) => {const args = modPodmanVolume.parseOptionsArgument(optionsArgument);return Bun.$`podman volume ${args}`;}
export const podmanVolumePrune = async (optionsArgument: modPodmanVolumePrune.optionsArgument) => {const args = modPodmanVolumePrune.parseOptionsArgument(optionsArgument);return Bun.$`podman volume prune ${args}`;}
export const podmanVolumeExists = async (optionsArgument: modPodmanVolumeExists.optionsArgument) => {const args = modPodmanVolumeExists.parseOptionsArgument(optionsArgument);return Bun.$`podman volume exists ${args}`;}
export const podmanVolumeReload = async (optionsArgument: modPodmanVolumeReload.optionsArgument) => {const args = modPodmanVolumeReload.parseOptionsArgument(optionsArgument);return Bun.$`podman volume reload ${args}`;}
export const podmanVolumeInspect = async (optionsArgument: modPodmanVolumeInspect.optionsArgument) => {const args = modPodmanVolumeInspect.parseOptionsArgument(optionsArgument);return Bun.$`podman volume inspect ${args}`;}
export const podmanVolumeCreate = async (optionsArgument: modPodmanVolumeCreate.optionsArgument) => {const args = modPodmanVolumeCreate.parseOptionsArgument(optionsArgument);return Bun.$`podman volume create ${args}`;}
export const podmanVolumeRm = async (optionsArgument: modPodmanVolumeRm.optionsArgument) => {const args = modPodmanVolumeRm.parseOptionsArgument(optionsArgument);return Bun.$`podman volume rm ${args}`;}
export const podmanVolumeLs = async (optionsArgument: modPodmanVolumeLs.optionsArgument) => {const args = modPodmanVolumeLs.parseOptionsArgument(optionsArgument);return Bun.$`podman volume ls ${args}`;}
export const podmanRename = async (optionsArgument: modPodmanRename.optionsArgument) => {const args = modPodmanRename.parseOptionsArgument(optionsArgument);return Bun.$`podman rename ${args}`;}
export const podmanInspect = async (optionsArgument: modPodmanInspect.optionsArgument) => {const args = modPodmanInspect.parseOptionsArgument(optionsArgument);return Bun.$`podman inspect ${args}`;}
export const podmanStats = async (optionsArgument: modPodmanStats.optionsArgument) => {const args = modPodmanStats.parseOptionsArgument(optionsArgument);return Bun.$`podman stats ${args}`;}
export const podmanSecret = async (optionsArgument: modPodmanSecret.optionsArgument) => {const args = modPodmanSecret.parseOptionsArgument(optionsArgument);return Bun.$`podman secret ${args}`;}
export const podmanSecretLs = async (optionsArgument: modPodmanSecretLs.optionsArgument) => {const args = modPodmanSecretLs.parseOptionsArgument(optionsArgument);return Bun.$`podman secret ls ${args}`;}
export const podmanSecretRm = async (optionsArgument: modPodmanSecretRm.optionsArgument) => {const args = modPodmanSecretRm.parseOptionsArgument(optionsArgument);return Bun.$`podman secret rm ${args}`;}
export const podmanSecretInspect = async (optionsArgument: modPodmanSecretInspect.optionsArgument) => {const args = modPodmanSecretInspect.parseOptionsArgument(optionsArgument);return Bun.$`podman secret inspect ${args}`;}
export const podmanSecretCreate = async (optionsArgument: modPodmanSecretCreate.optionsArgument) => {const args = modPodmanSecretCreate.parseOptionsArgument(optionsArgument);return Bun.$`podman secret create ${args}`;}
export const podmanSecretExists = async (optionsArgument: modPodmanSecretExists.optionsArgument) => {const args = modPodmanSecretExists.parseOptionsArgument(optionsArgument);return Bun.$`podman secret exists ${args}`;}
export const podmanCreate = async (optionsArgument: modPodmanCreate.optionsArgument) => {const args = modPodmanCreate.parseOptionsArgument(optionsArgument);return Bun.$`podman create ${args}`;}
export const podmanImages = async (optionsArgument: modPodmanImages.optionsArgument) => {const args = modPodmanImages.parseOptionsArgument(optionsArgument);return Bun.$`podman images ${args}`;}
export const podmanCp = async (optionsArgument: modPodmanCp.optionsArgument) => {const args = modPodmanCp.parseOptionsArgument(optionsArgument);return Bun.$`podman cp ${args}`;}
export const podmanUpdate = async (optionsArgument: modPodmanUpdate.optionsArgument) => {const args = modPodmanUpdate.parseOptionsArgument(optionsArgument);return Bun.$`podman update ${args}`;}
export const podmanPull = async (optionsArgument: modPodmanPull.optionsArgument) => {const args = modPodmanPull.parseOptionsArgument(optionsArgument);return Bun.$`podman pull ${args}`;}
export const podmanExec = async (optionsArgument: modPodmanExec.optionsArgument) => {const args = modPodmanExec.parseOptionsArgument(optionsArgument);return Bun.$`podman exec ${args}`;}
export const podmanVersion = async (optionsArgument: modPodmanVersion.optionsArgument) => {const args = modPodmanVersion.parseOptionsArgument(optionsArgument);return Bun.$`podman version ${args}`;}
export const podmanStart = async (optionsArgument: modPodmanStart.optionsArgument) => {const args = modPodmanStart.parseOptionsArgument(optionsArgument);return Bun.$`podman start ${args}`;}
export const podmanWait = async (optionsArgument: modPodmanWait.optionsArgument) => {const args = modPodmanWait.parseOptionsArgument(optionsArgument);return Bun.$`podman wait ${args}`;}
export const podmanSave = async (optionsArgument: modPodmanSave.optionsArgument) => {const args = modPodmanSave.parseOptionsArgument(optionsArgument);return Bun.$`podman save ${args}`;}
export const podmanKill = async (optionsArgument: modPodmanKill.optionsArgument) => {const args = modPodmanKill.parseOptionsArgument(optionsArgument);return Bun.$`podman kill ${args}`;}
export const podmanInit = async (optionsArgument: modPodmanInit.optionsArgument) => {const args = modPodmanInit.parseOptionsArgument(optionsArgument);return Bun.$`podman init ${args}`;}
export const podmanBuild = async (optionsArgument: modPodmanBuild.optionsArgument) => {const args = modPodmanBuild.parseOptionsArgument(optionsArgument);return Bun.$`podman build ${args}`;}
export const podmanRun = async (optionsArgument: modPodmanRun.optionsArgument) => {const args = modPodmanRun.parseOptionsArgument(optionsArgument);return Bun.$`podman run ${args}`;}
export const podmanLogs = async (optionsArgument: modPodmanLogs.optionsArgument) => {const args = modPodmanLogs.parseOptionsArgument(optionsArgument);return Bun.$`podman logs ${args}`;}
export const podmanPs = async (optionsArgument: modPodmanPs.optionsArgument) => {const args = modPodmanPs.parseOptionsArgument(optionsArgument);return Bun.$`podman ps ${args}`;}
export const podmanTag = async (optionsArgument: modPodmanTag.optionsArgument) => {const args = modPodmanTag.parseOptionsArgument(optionsArgument);return Bun.$`podman tag ${args}`;}
export const podmanDiff = async (optionsArgument: modPodmanDiff.optionsArgument) => {const args = modPodmanDiff.parseOptionsArgument(optionsArgument);return Bun.$`podman diff ${args}`;}
export const podmanPort = async (optionsArgument: modPodmanPort.optionsArgument) => {const args = modPodmanPort.parseOptionsArgument(optionsArgument);return Bun.$`podman port ${args}`;}
export const podmanHelp = async (optionsArgument: modPodmanHelp.optionsArgument) => {const args = modPodmanHelp.parseOptionsArgument(optionsArgument);return Bun.$`podman help ${args}`;}
export const podmanExport = async (optionsArgument: modPodmanExport.optionsArgument) => {const args = modPodmanExport.parseOptionsArgument(optionsArgument);return Bun.$`podman export ${args}`;}
export const podmanLogout = async (optionsArgument: modPodmanLogout.optionsArgument) => {const args = modPodmanLogout.parseOptionsArgument(optionsArgument);return Bun.$`podman logout ${args}`;}
export const podmanCommit = async (optionsArgument: modPodmanCommit.optionsArgument) => {const args = modPodmanCommit.parseOptionsArgument(optionsArgument);return Bun.$`podman commit ${args}`;}
export const podmanUntag = async (optionsArgument: modPodmanUntag.optionsArgument) => {const args = modPodmanUntag.parseOptionsArgument(optionsArgument);return Bun.$`podman untag ${args}`;}
export const podmanStop = async (optionsArgument: modPodmanStop.optionsArgument) => {const args = modPodmanStop.parseOptionsArgument(optionsArgument);return Bun.$`podman stop ${args}`;}
export const podmanAttach = async (optionsArgument: modPodmanAttach.optionsArgument) => {const args = modPodmanAttach.parseOptionsArgument(optionsArgument);return Bun.$`podman attach ${args}`;}
export const podmanRmi = async (optionsArgument: modPodmanRmi.optionsArgument) => {const args = modPodmanRmi.parseOptionsArgument(optionsArgument);return Bun.$`podman rmi ${args}`;}
export const podmanPush = async (optionsArgument: modPodmanPush.optionsArgument) => {const args = modPodmanPush.parseOptionsArgument(optionsArgument);return Bun.$`podman push ${args}`;}
export const podmanRestart = async (optionsArgument: modPodmanRestart.optionsArgument) => {const args = modPodmanRestart.parseOptionsArgument(optionsArgument);return Bun.$`podman restart ${args}`;}
export const podmanTop = async (optionsArgument: modPodmanTop.optionsArgument) => {const args = modPodmanTop.parseOptionsArgument(optionsArgument);return Bun.$`podman top ${args}`;}
export const podmanEvents = async (optionsArgument: modPodmanEvents.optionsArgument) => {const args = modPodmanEvents.parseOptionsArgument(optionsArgument);return Bun.$`podman events ${args}`;}
export const podmanInfo = async (optionsArgument: modPodmanInfo.optionsArgument) => {const args = modPodmanInfo.parseOptionsArgument(optionsArgument);return Bun.$`podman info ${args}`;}


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