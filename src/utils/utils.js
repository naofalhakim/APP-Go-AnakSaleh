const getGenderText = (code) => {
    if(code === 1 || code === 0) return 'Laki-laki'
    else return 'Perempuan'
}

export {getGenderText}