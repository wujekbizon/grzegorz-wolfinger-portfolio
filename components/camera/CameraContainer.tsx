import styles from './CameraContainer.module.scss'

interface CameraProps {
  isFreeMode: boolean
  earthRotationSpeed: string
  setEarthRotationSpeed: (value: React.SetStateAction<string>) => void
  resetClickHandler: () => void
  freeModeClickHandler: () => void
}

const CameraContainer = ({
  isFreeMode,
  resetClickHandler,
  freeModeClickHandler,
  earthRotationSpeed,
  setEarthRotationSpeed
}: CameraProps) => {
  return (
    <div className={styles.camera_container}>
      <div className={styles.btns}>
        <h4>OrbitControl Camera</h4>
        <button onClick={resetClickHandler}>Reset Camera</button>
        <button onClick={freeModeClickHandler}>Free Mode {!isFreeMode ? 'On' : 'Off'}</button>
        <div className={styles.earth_speed}>
          <div className={styles.speed}>
            <h4>Earth Rotation Speed</h4> - <h4>{earthRotationSpeed}</h4>
          </div>
          <input
            id="range"
            type="range"
            min={1}
            max={40}
            value={earthRotationSpeed}
            onChange={(e) => setEarthRotationSpeed(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
export default CameraContainer
