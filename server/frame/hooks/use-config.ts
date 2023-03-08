export const useConfig = (extraParams?) => {
    return {
        url: 'https://api.themoviedb.org/3',
        params: {
            'api_key': 'b36f96ebf28478818457b57892b70be0',
            // 'language': 'zh-CN',
            ...extraParams
        }
    }
}