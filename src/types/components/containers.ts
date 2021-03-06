import { Product, ProductBallot } from "../../interfaces"

export type ModalProps = {
    open: Boolean;
    isOpen: () => void;
}

export type ProductModalProps = ModalProps & {
    id: number;
    cant: number;
    addCant: () => void;
    removeCant: () => void;
}

export type SeekerProps = {
    openShoppingCar: () => void;
}

export type ActionsHeaderProps = {
    open: boolean;
    isOpen: () => void;
}

export type ShoppingCarProdutcsProps = {
    heigth: number;
    products?: Product[];
    total?: number;
}

export type ShoppingCarNoProdutcsProps = {
    heigth: number;
    openShoppingCar: () => void;
}

export type BannerProductsProps = {
    title: string;
}

export type ImgBannerProductsProps = {
    src: string;
}

export type PLProductProps = {
    img: string;
    product: Product;
    openModal: () => void;
    setId: React.Dispatch<React.SetStateAction<number>>;
}

export type ProductsListProps = {
    params: boolean;
    value?: string | number;
}

export type AccessFormsProps = {
    width: number;
    move?: boolean;
    setMove?: React.Dispatch<React.SetStateAction<boolean>>;
}

export type DeliveryAddressProps = {
    direction: string;
}

export type ProductsToPayProps = {
    products: Product[];
}

export type PaymentResumeProps = {
    totalProducts: number;
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
}

export type PaymentObjectProps = {
    date: string;
    total: number;
    products: ProductBallot[];
}