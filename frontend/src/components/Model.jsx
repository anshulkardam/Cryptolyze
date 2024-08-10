import { PresentationControls, Stage, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

function CoinModel(props) {
    const { scene } = useGLTF('./bitcoin.glb')
    return <primitive object={scene} {...props} />
}

export const CoinScene = () => {
    return (
        <div className="h-full w-full relative">
            <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} className="absolute inset-0 bg-black">
                <color attach="background" args={['#000000']} />
                <ambientLight intensity={0.5} />

                <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
                    <Stage environment={null}>
                        <CoinModel scale={0.01} />
                    </Stage>
                </PresentationControls>
            </Canvas>
        </div>
    )
}
