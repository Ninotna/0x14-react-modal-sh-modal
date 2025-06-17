# react-modal-sh-modal

Composant React de modale personnalisée, léger, accessible, et sans dépendance CSS externe.  
Ce composant est conçu pour être intégré facilement dans n'importe quelle application React.

---

## 🚀 Installation

```bash
npm install react-modal-sh-modal
```

---

## 💡 Utilisation

```jsx
import { SHModal } from 'react-modal-sh-modal';
import 'react-modal-sh-modal/dist/modal.css';

function App() {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<>
			<button onClick={() => setIsOpen(true)}>Ouvrir la modale</button>
			<SHModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<h2>Modale ouverte</h2>
				<p>Ceci est un contenu de test.</p>
			</SHModal>
		</>
	);
}
```

---

## 🧩 Props

| Prop      | Type       | Description                                     |
|-----------|------------|-------------------------------------------------|
| `isOpen`  | `boolean`  | Affiche ou masque la modale                    |
| `onClose` | `function` | Fonction appelée lors de la fermeture          |
| `children`| `ReactNode`| Contenu HTML ou JSX affiché dans la modale     |

---

## 🛠️ Fonctionnalités

- Fermeture par clic hors de la modale (overlay)
- Fermeture via bouton "×"
- Fermeture via la touche `Escape`
- Contenu dynamique via `children`
- Structure simple et personnalisable

---

## 📦 Build & publication

```bash
npm run build
npm publish --access public
```

---

## 📄 Licence

MIT – © Antonin Noyelle
