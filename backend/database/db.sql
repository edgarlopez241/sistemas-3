CREATE DATABASE "ProyectoNSS"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LOCALE_PROVIDER = 'libc'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

CREATE EXTENSION pgcrypto;

CREATE TABLE public."Usuario"
(
    id_usuario serial NOT NULL,
    nombre character varying(42) NOT NULL,
    apellido character varying(42) NOT NULL,
    correo character varying(64),
    telefono character varying(11),
    fecha_nacimiento date,
    genero "char",
    password_hash character varying(100),
    rol "char",
    PRIMARY KEY (id_usuario)
);

ALTER TABLE IF EXISTS public."Usuario"
    OWNER to postgres;

CREATE TABLE public."SubscripcionUsuario"
(
    id_subscripcion serial NOT NULL,
    id_usuario serial,
    tipo_subscripcion character varying(80) NOT NULL,
    modalidad_temporal character varying(80),
    fecha_vencimiento date,
    estatus_subscripcion "char" NOT NULL,
    PRIMARY KEY (id_subscripcion),
    CONSTRAINT id_usuario FOREIGN KEY (id_usuario)
        REFERENCES public."Usuario" (id_usuario) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE IF EXISTS public."SubscripcionUsuario"
    OWNER to postgres;

CREATE TABLE public."TestNutricional"
(
    id_test serial NOT NULL,
    id_usuario serial NOT NULL,
    fecha_realizado date,
    habitos_alimenticios text,
    metas_nutricionales text,
    necesidades text,
    PRIMARY KEY (id_test),
    CONSTRAINT id_usuario FOREIGN KEY (id_usuario)
        REFERENCES public."Usuario" (id_usuario) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE IF EXISTS public."TestNutricional"
    OWNER to postgres;

CREATE TABLE public."Soporte"
(
    id_soporte serial NOT NULL,
    id_usuario serial NOT NULL,
    detalles_soporte text,
    fecha_soporte date,
    PRIMARY KEY (id_soporte),
    CONSTRAINT id_usuario FOREIGN KEY (id_usuario)
        REFERENCES public."Usuario" (id_usuario) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE IF EXISTS public."Soporte"
    OWNER to postgres;

CREATE TABLE public."ReporteFeedback"
(
    id_reporte serial NOT NULL,
    id_usuario serial NOT NULL,
    comentario text,
    calificacion smallint,
    fecha_realizado date,
    PRIMARY KEY (id_reporte),
    CONSTRAINT id_usuario FOREIGN KEY (id_usuario)
        REFERENCES public."Usuario" (id_usuario) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE IF EXISTS public."ReporteFeedback"
    OWNER to postgres;

CREATE TABLE public."Notificacion"
(
    id_notificacion serial NOT NULL,
    id_usuario serial NOT NULL,
    descripcion_notificacion text,
    fecha_publicacion date,
    PRIMARY KEY (id_notificacion),
    CONSTRAINT id_usuario FOREIGN KEY (id_usuario)
        REFERENCES public."Usuario" (id_usuario) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE IF EXISTS public."Notificacion"
    OWNER to postgres;

CREATE TABLE public."Recurso"
(
    id_recurso serial NOT NULL,
    id_usuario serial NOT NULL,
    nombre_recurso character varying(64),
    enlace_recurso character varying(255),
    estatus_recurso "char",
    PRIMARY KEY (id_recurso),
    CONSTRAINT id_usuario FOREIGN KEY (id_usuario)
        REFERENCES public."Usuario" (id_usuario) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE IF EXISTS public."Recurso"
    OWNER to postgres;

CREATE TABLE public."PlanNutricional"
(
    id_plan serial NOT NULL,
    id_usuario serial NOT NULL,
    descripcion text,
    PRIMARY KEY (id_plan),
    CONSTRAINT id_usuario FOREIGN KEY (id_usuario)
        REFERENCES public."Usuario" (id_usuario) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE IF EXISTS public."PlanNutricional"
    OWNER to postgres;

CREATE TABLE public."Seguimiento"
(
    id_seguimiento serial NOT NULL,
    id_usuario integer NOT NULL,
    descripcion_analisis text,
    fecha_seguimiento date,
    PRIMARY KEY (id_seguimiento),
    CONSTRAINT id_usuario FOREIGN KEY (id_usuario)
        REFERENCES public."Usuario" (id_usuario) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE IF EXISTS public."Seguimiento"
    OWNER to postgres;