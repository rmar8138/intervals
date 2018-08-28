
export const setSets = ({ sets, work, rest }) => ({
    type: 'SET_SETS',
    sets,
    work,
    rest
});

export const setIsWork = () => ({
    type: 'SET_IS_WORK'
});

export const setIsRest = () => ({
    type: 'SET_IS_REST'
});