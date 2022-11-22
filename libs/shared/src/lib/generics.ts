export type WithProperty<TEntity, PropKey extends string, PropType> = TEntity & Record<PropKey, PropType>;

export type WithProps<TEntity, TProps extends Record<string, unknown>> = TEntity & TProps;

export type Nullable<T> = T | null;
