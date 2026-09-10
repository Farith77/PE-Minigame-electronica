import { useState } from 'react'
import type { Assignment, Level } from '../type/game'

type Props = { level: Level; assignments: Assignment; symbolOrder: string[]; conceptOrder: string[]; disabled: boolean; onAssign: (conceptId: string, symbolId: string) => void; onClear: (conceptId: string) => void }

export function GameBoard({ level, assignments, symbolOrder, conceptOrder, disabled, onAssign, onClear }: Props) {
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null)
  const itemById = new Map(level.items.map((entry) => [entry.id, entry]))
  const assignedSymbols = new Set(Object.values(assignments))
  const selectSymbol = (id: string) => { if (!disabled) setSelectedSymbol((current) => current === id ? null : id) }
  const dropOnConcept = (conceptId: string, symbolId?: string) => {
    const symbol = symbolId ?? selectedSymbol
    if (!disabled && symbol) { onAssign(conceptId, symbol); setSelectedSymbol(null) }
  }
  return <section className="board"><div className="board-column"><div className="board-label"><span>01</span><h2>Símbolos</h2><small>Arrastra o selecciona</small></div><div className="symbol-grid">{symbolOrder.map((id) => {
    const symbol = itemById.get(id); if (!symbol) return null; const assigned = assignedSymbols.has(id)
    return <button key={id} className={`symbol-card ${selectedSymbol === id ? 'is-selected' : ''} ${assigned ? 'is-assigned' : ''}`} draggable={!disabled && !assigned} onDragStart={(event) => event.dataTransfer.setData('text/plain', id)} onClick={() => selectSymbol(id)} disabled={disabled || assigned} aria-pressed={selectedSymbol === id}><img src={symbol.image} alt={`Símbolo: ${symbol.concept}`} /></button>
  })}</div></div><div className="connection-divider" aria-hidden="true">⟶</div><div className="board-column"><div className="board-label"><span>02</span><h2>Conceptos</h2><small>Suelta el símbolo correcto</small></div><div className="concept-list">{conceptOrder.map((id) => {
    const concept = itemById.get(id); const assignedId = assignments[id]; const assigned = assignedId ? itemById.get(assignedId) : undefined; const correct = disabled && assignedId === id; const incorrect = disabled && Boolean(assignedId) && assignedId !== id
    if (!concept) return null
    return <button key={id} className={`drop-zone ${assigned ? 'has-symbol' : ''} ${correct ? 'is-correct' : ''} ${incorrect ? 'is-incorrect' : ''}`} onDragOver={(event) => event.preventDefault()} onDrop={(event) => { event.preventDefault(); dropOnConcept(id, event.dataTransfer.getData('text/plain')) }} onClick={() => dropOnConcept(id)} disabled={disabled}><span className="concept-copy"><strong>{concept.concept}</strong><small>{concept.description}</small></span>{assigned && <span className="assigned-symbol" title={assigned.concept}><img src={assigned.image} alt="" /><i onClick={(event) => { event.stopPropagation(); onClear(id) }}>×</i></span>}{disabled && <b className="result-mark">{correct ? '✓' : incorrect ? '×' : '—'}</b>}</button>
  })}</div></div></section>
}
