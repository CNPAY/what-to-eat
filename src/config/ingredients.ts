// 食材分类配置
export interface IngredientCategory {
    id: string
    name: string
    icon: string
    color: string
    items: string[]
}

export const ingredientCategories: IngredientCategory[] = [
    {
        id: 'meat',
        name: '荤菜',
        icon: '🥩',
        color: 'bg-red-100 border-red-300 text-red-800',
        items: ['猪肉', '牛肉', '羊肉', '鸡肉', '鸭肉', '鹅肉', '猪排骨', '牛排', '鸡翅', '鸡腿', '鸡胸肉', '五花肉', '瘦肉', '肉丝', '肉片', '肉丁', '腊肉', '香肠']
    },
    {
        id: 'seafood',
        name: '海鲜',
        icon: '🦐',
        color: 'bg-blue-100 border-blue-300 text-blue-800',
        items: ['鱼', '虾', '蟹', '贝类', '鱿鱼', '章鱼', '带鱼', '黄鱼', '鲈鱼', '鲫鱼', '草鱼', '鲤鱼', '大虾', '基围虾', '龙虾', '扇贝', '蛤蜊', '生蚝']
    },
    {
        id: 'vegetables',
        name: '蔬菜',
        icon: '🥬',
        color: 'bg-green-100 border-green-300 text-green-800',
        items: [
            '白菜',
            '菠菜',
            '韭菜',
            '芹菜',
            '生菜',
            '油菜',
            '西红柿',
            '黄瓜',
            '茄子',
            '豆角',
            '青椒',
            '红椒',
            '土豆',
            '萝卜',
            '胡萝卜',
            '洋葱',
            '大蒜',
            '生姜',
            '冬瓜',
            '南瓜',
            '丝瓜',
            '苦瓜',
            '西葫芦',
            '豆芽'
        ]
    },
    {
        id: 'mushrooms',
        name: '菌菇',
        icon: '🍄',
        color: 'bg-yellow-100 border-yellow-300 text-yellow-800',
        items: ['香菇', '平菇', '金针菇', '杏鲍菇', '茶树菇', '草菇', '木耳', '银耳', '竹荪', '猴头菇', '口蘑', '蟹味菇']
    },
    {
        id: 'beans',
        name: '豆类',
        icon: '🫘',
        color: 'bg-orange-100 border-orange-300 text-orange-800',
        items: ['豆腐', '豆干', '豆皮', '腐竹', '千张', '豆泡', '毛豆', '豌豆', '蚕豆', '绿豆', '红豆', '黑豆', '豆芽', '豆苗', '豆角', '四季豆']
    },
    {
        id: 'eggs',
        name: '蛋类',
        icon: '🥚',
        color: 'bg-amber-100 border-amber-300 text-amber-800',
        items: ['鸡蛋', '鸭蛋', '鹌鹑蛋', '咸鸭蛋', '松花蛋', '鹅蛋']
    },
    {
        id: 'grains',
        name: '主食',
        icon: '🌾',
        color: 'bg-stone-100 border-stone-300 text-stone-800',
        items: ['大米', '小米', '糯米', '面粉', '面条', '挂面', '馒头', '包子', '饺子皮', '馄饨皮', '年糕', '粉条']
    },
    {
        id: 'seasonings',
        name: '调料',
        icon: '🧂',
        color: 'bg-gray-100 border-gray-300 text-gray-800',
        items: ['盐', '糖', '醋', '生抽', '老抽', '料酒', '蚝油', '芝麻油', '花椒', '八角', '桂皮', '香叶', '辣椒', '胡椒粉', '孜然', '五香粉', '鸡精', '味精']
    }
]
