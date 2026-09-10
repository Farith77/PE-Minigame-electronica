export type SymbolItem = { id: string; image: string; concept: string; description: string }
export type Level = { id: number; title: string; items: SymbolItem[] }
export type Assignment = Record<string, string>
export type GameScreen = 'welcome' | 'playing' | 'completed'
