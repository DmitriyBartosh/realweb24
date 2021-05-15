export const containerText = {
  hidden: { 
    transition: { 
      when: "afterChildren",
      staggerChildren: 0,
    }
  },
  show: {
    transition: {
      staggerChildren: 0.15,
    }
  }
}

export const itemUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
}

export const itemDown = {
  hidden: { opacity: 0, y: -35 },
  show: { opacity: 1, y: 0 }
}

export const itemScale = {
  hidden: { 
    opacity: 0, 
    y: -20, 
    scale: 0.9,
   },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
  },
}