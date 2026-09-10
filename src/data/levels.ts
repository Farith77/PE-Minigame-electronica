import type { Level } from '../type/game'

const item = (id: string, file: string, concept: string, description: string) => ({
  id,
  image: `${import.meta.env.BASE_URL}images/${file}`,
  concept,
  description,
})

export const levels: Level[] = [
  { id: 1, title: 'Fundamentos', items: [
    item('regulador', 'level-1/Voltage-Regulator-IEC-Symbol.svg.webp', 'Regulador de voltaje', 'Mantiene estable un nivel de tensión.'),
    item('transformador', 'level-1/T_IEC-symbool.svg.webp', 'Transformador', 'Transfiere energía entre circuitos mediante inducción.'),
    item('resistencia', 'level-1/Resistor_symbol_IEC.svg.webp', 'Resistencia', 'Limita el paso de corriente eléctrica.'),
    item('lampara-neon', 'level-1/Neon_lamp_schematics.svg.webp', 'Lámpara de neón', 'Emite luz al ionizar gas neón.'),
    item('lampara', 'level-1/Lamp_symbol,_old.svg.webp', 'Lámpara', 'Convierte energía eléctrica en luz.'),
    item('fusible', 'level-1/IEC_style_fuse.svg.webp', 'Fusible', 'Protege el circuito ante sobrecorriente.'),
    item('zumbador', 'level-1/Buzzer-IEC-Symbol-90CW.svg.webp', 'Zumbador', 'Convierte energía eléctrica en sonido.'),
    item('conmutador', 'level-1/3_way_switch.svg.webp', 'Conmutador de tres vías', 'Controla un circuito desde dos puntos.'),
  ] },
  { id: 2, title: 'Interruptores y corriente', items: [
    item('motor', 'level-2/Motor_-_Schaltsymbol.svg.webp', 'Motor eléctrico', 'Convierte energía eléctrica en movimiento.'),
    item('dpst', 'level-2/DPST-symbol.svg.webp', 'Interruptor DPST', 'Abre o cierra dos circuitos simultáneamente.'),
    item('acdc', 'level-2/AC_and_DC_Sympols.svg.webp', 'Corriente alterna y continua', 'Indica los dos tipos principales de corriente.'),
    item('seccionador', 'level-2/Rozlacznik.svg.webp', 'Seccionador', 'Aísla una parte de la instalación eléctrica.'),
    item('spst-nc', 'level-2/SPST-Switch-NC.svg.webp', 'Interruptor normalmente cerrado', 'Permanece cerrado en su estado de reposo.'),
    item('spst', 'level-2/SPST-Switch.svg.webp', 'Interruptor simple', 'Abre o cierra un único circuito.'),
    item('mercurio', 'level-2/Symbol_Mercury-wetted_switch.svg.webp', 'Interruptor de mercurio', 'Conmuta mediante una gota de mercurio.'),
    item('cierre', 'level-2/Symbol_closing-switch_(operated).svg.webp', 'Interruptor de cierre', 'Representa un contacto que se está cerrando.'),
    item('cierre-alt', 'level-2/Symbol_closing-switch_(1st_alternative).svg.webp', 'Interruptor de cierre alternativo', 'Variante gráfica de un contacto de cierre.'),
    item('conmutador-interrupcion', 'level-2/Symbol_change-over_switch_(with_interruption_within_the_change-over_process).svg.webp', 'Conmutador con interrupción', 'Cambia de contacto pasando por una posición abierta.'),
  ] },
  { id: 3, title: 'Componentes avanzados', items: [
    item('transformador-yy', 'level-3/Yy_transformer_symbol.svg.webp', 'Transformador conexión Yy', 'Transformador trifásico con estrella en ambos lados.'),
    item('nucleo-hierro', 'level-3/Transformer_Iron_Core.svg.webp', 'Transformador con núcleo de hierro', 'Transformador con un núcleo ferromagnético.'),
    item('tres-electrodos', 'level-3/Three_electrode_setup.svg.webp', 'Sistema de tres electrodos', 'Configuración de medición electroquímica.'),
    item('ohmetro', 'level-3/Simple-circuit-with-ohmmeter.svg.webp', 'Circuito con óhmetro', 'Mide la resistencia eléctrica de un componente.'),
    item('capacitor-polarizado', 'level-3/Polarized_capacitor_symbol.svg.webp', 'Capacitor polarizado', 'Capacitor que debe respetar su polaridad.'),
    item('microfono', 'level-3/Mic-IEC-Symbol.svg.webp', 'Micrófono', 'Convierte sonido en señal eléctrica.'),
    item('condensador', 'level-3/Kondensator.svg.webp', 'Condensador', 'Almacena energía en un campo eléctrico.'),
    item('jk', 'level-3/JK-E-T_IEC-symbool.svg.webp', 'Biestable JK', 'Circuito lógico secuencial de dos estados.'),
    item('fusible-basico', 'level-3/Fuse-basic-symbols.svg.webp', 'Fusible básico', 'Elemento de protección contra sobrecorriente.'),
    item('capacitor-antiguo', 'level-3/Capacitor_old_with_polarity.svg.webp', 'Capacitor polarizado clásico', 'Símbolo clásico de un capacitor con polaridad.'),
    item('capacitor-variable', 'level-3/Capacitor_Left_wikisch.svg.webp', 'Capacitor variable', 'Permite ajustar su capacidad eléctrica.'),
    item('cable-10g', 'level-3/10G_BASE-T_x_3_cables.svg.webp', 'Cable 10GBASE-T', 'Cableado de red Ethernet de 10 gigabits.'),
  ] },
]
