import { useCallback, useEffect, useMemo, useState } from 'react'
import { GameBoard } from './components/GameBoard'
import { LevelResult } from './components/LevelResult'
import { levels } from './data/levels'
import type { Assignment, GameScreen, Level } from './type/game'

const LEVEL_TIME = 60
const shuffle = <T,>(items: T[]) => [...items].sort(() => Math.random() - 0.5)

function App() {
  const [screen, setScreen] = useState<GameScreen>('welcome')
  const [levelIndex, setLevelIndex] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(LEVEL_TIME)
  const [assignments, setAssignments] = useState<Assignment>({})
  const [resultOpen, setResultOpen] = useState(false)
  const [timeExpired, setTimeExpired] = useState(false)
  const [symbolOrder, setSymbolOrder] = useState<string[]>([])
  const [conceptOrder, setConceptOrder] = useState<string[]>([])
  const level = levels[levelIndex]

  const prepareLevel = useCallback((nextLevel: Level) => {
    setAssignments({}); setSecondsLeft(LEVEL_TIME); setTimeExpired(false); setResultOpen(false)
    setSymbolOrder(shuffle(nextLevel.items.map((entry) => entry.id)))
    setConceptOrder(shuffle(nextLevel.items.map((entry) => entry.id)))
  }, [])
  const startGame = () => { setLevelIndex(0); prepareLevel(levels[0]); setScreen('playing') }

  useEffect(() => {
    if (screen !== 'playing' || resultOpen) return
    if (secondsLeft === 0) { setTimeExpired(true); setResultOpen(true); return }
    const timer = window.setTimeout(() => setSecondsLeft((time) => time - 1), 1000)
    return () => window.clearTimeout(timer)
  }, [screen, secondsLeft, resultOpen])

  const assignSymbol = (conceptId: string, symbolId: string) => {
    if (resultOpen) return
    setAssignments((current) => {
      const withoutSymbol = Object.fromEntries(Object.entries(current).filter(([, value]) => value !== symbolId))
      return { ...withoutSymbol, [conceptId]: symbolId }
    })
  }
  const clearAssignment = (conceptId: string) => {
    if (resultOpen) return
    setAssignments((current) => { const next = { ...current }; delete next[conceptId]; return next })
  }
  const correctCount = useMemo(() => level.items.filter((entry) => assignments[entry.id] === entry.id).length, [assignments, level])
  const isPerfect = correctCount === level.items.length
  const nextLevel = () => {
    if (levelIndex === levels.length - 1) { setResultOpen(false); setScreen('completed'); return }
    const nextIndex = levelIndex + 1; setLevelIndex(nextIndex); prepareLevel(levels[nextIndex])
  }

  if (screen === 'welcome') return <main className="welcome-screen"><p className="owner-name">Alan Jorge Garcia Apaza</p><section className="welcome-card"><p className="eyebrow">LABORATORIO IEC</p><span className="bolt" aria-hidden="true">ϟ</span><h1>Conecta los símbolos eléctricos</h1><p className="lead">Arrastra cada símbolo hacia su concepto correcto antes de que se agote el tiempo.</p><div className="level-preview">{levels.map((entry) => <span key={entry.id}>Nivel {entry.id} · {entry.items.length} símbolos</span>)}</div><button className="button button-primary button-large" onClick={startGame}>Comenzar</button><p className="hint">También puedes tocar un símbolo y después un concepto.</p></section></main>
  if (screen === 'completed') return <main className="welcome-screen"><p className="owner-name">Alan Jorge Garcia Apaza</p><section className="welcome-card completion-card"><p className="eyebrow">CIRCUITO COMPLETADO</p><span className="bolt success-bolt" aria-hidden="true">✓</span><h1>¡Excelente trabajo!</h1><p className="lead">Has identificado correctamente los 30 símbolos eléctricos IEC.</p><button className="button button-primary button-large" onClick={startGame}>Jugar otra vez</button></section></main>

  return <main className="game-screen"><p className="owner-name">Alan Jorge Garcia Apaza</p><header className="game-header"><div><p className="eyebrow">LABORATORIO IEC</p><h1>Nivel {level.id}: {level.title}</h1></div><div className={`timer ${secondsLeft <= 15 ? 'timer-warning' : ''}`}><span>TIEMPO</span><strong>00:{String(secondsLeft).padStart(2, '0')}</strong></div></header><section className="game-meta"><span>{level.items.length} símbolos por conectar</span><div className="progress-track"><i style={{ width: `${(Object.keys(assignments).length / level.items.length) * 100}%` }} /></div><span>{Object.keys(assignments).length}/{level.items.length} ubicados</span></section><GameBoard level={level} assignments={assignments} symbolOrder={symbolOrder} conceptOrder={conceptOrder} disabled={resultOpen} onAssign={assignSymbol} onClear={clearAssignment} /><footer className="game-footer"><p>Arrastra cada símbolo a su definición o usa el modo táctil: toca símbolo → concepto.</p><button className="button button-primary" onClick={() => setResultOpen(true)}>Terminar y evaluar</button></footer>{resultOpen && <LevelResult level={level} correctCount={correctCount} timeExpired={timeExpired} isPerfect={isPerfect} isFinalLevel={levelIndex === levels.length - 1} onRetry={() => prepareLevel(level)} onNext={nextLevel} />}</main>
}
export default App
